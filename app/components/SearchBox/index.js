import React, { useEffect, useState, useRef } from 'react';
import { Icon, Button, Text, Item, Input } from 'native-base';
import { Keyboard, Platform } from 'react-native';

const SearchBox = (props) => {
    const { onChange, setIsSearching, hideCancel } = props;
    const [textSearch, setTextSearch] = useState('');

    const searching = useRef();

    useEffect(() => {
        return () => {
            if (searching.current) clearTimeout(searching.current);
        };
    }, []);

    const handleSearch = (newText) => {
        let text = newText
        text = text.trimLeft()

        if (text === textSearch) return

        setTextSearch(text);
        if (searching.current) clearTimeout(searching.current);
        searching.current = setTimeout(() => {
            if (onChange) onChange(text);
        }, 500);

    };

    const onClose = () => {
        setIsSearching && setIsSearching(false)
        if (searching.current) clearTimeout(searching.current);
        onChange('')
    }

    const onRemove = () => {
        if (textSearch.trim()) handleSearch('')
        else setTextSearch('')
    }

    return (
        <Item style={{ position: 'absolute', width: '95%', zIndex: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: Platform.OS === 'ios' ? 28 : 8, height: 40 }}>
            <Button transparent onPress={() => onChange(textSearch)}>
                <Icon name="search" />
            </Button>
            <Input placeholder="Tìm kiếm" value={textSearch} onChangeText={handleSearch} onSubmitEditing={Keyboard.dismiss} />
            <Button iconLeft transparent onPress={onRemove}>
                <Icon name="remove" type="MaterialIcons" />
            </Button>
            <Button transparent onPress={onClose}>
                <Text>Đóng</Text>
            </Button>
        </Item >
    );
};

export default SearchBox;
