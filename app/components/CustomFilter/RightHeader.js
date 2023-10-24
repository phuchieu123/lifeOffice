import React, { useState } from 'react';
import { Icon, View, Text } from 'native-base';
import FilterModal from './FilterModal';

export default RightHeader = props => {
    const { children, enableFilterModal, onSave } = props
    const [openFilterModal, setOpenFilterModal] = useState(false);

    const handleOpenFilterModal = () => {
        setOpenFilterModal(true)
    }

    const handleFilter = (obj) => {
        setOpenFilterModal(false)
        setTimeout(() => onSave(obj), 500)
    }

    return <>
        {children}
        {enableFilterModal &&
            <View>
                <Icon
                    name="filter"
                    type="FontAwesome"
                    style={{ color: '#fff', marginHorizontal: 10 }}
                    onPress={handleOpenFilterModal}
                />
                {/* <Text style={{ position: 'absolute', alignSelf: 'center', bottom: 0, right: 5, color: '#fff', fontSize: 9 }}>10</Text> */}
                <FilterModal
                    {...props}
                    isVisible={openFilterModal}
                    onClose={() => setOpenFilterModal(false)}
                    onSave={handleFilter}
                />
            </View>
        }
    </>
}
