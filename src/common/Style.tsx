import { StyleSheet } from 'react-native';



export const demoStyles = StyleSheet.create({
    mainBgColor: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    listingHeader: {
        flexDirection: 'row',
        width: '100%',
        padding: 16,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#E9E9E9'
    },
    titleArea: {
        flex: 1,
        alignItems: 'flex-start',
    },
    headTitle: {
        fontSize: 10,
        color: '#1D7DEA'
    },
    headSubTitle: {
        fontSize: 24,
        color: '#1D7DEA',
        flex: 1
    },
    searchArea: {
        alignItems: 'flex-end',
        width: 36,
        height: 36,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 36,
    },
    searchIcon: {
        width: 16,
        height: 16,
        alignItems: 'center',
        alignContent: 'center'
    },

    schoolLevel: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#F0F7FF',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#E9E9E9'
    },
    schoolLevelText: {
        fontSize: 16,
        color: '#333',
    },
    assignContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#E9E9E9' 
    },
    testIcon: {
        alignSelf: 'center',
        alignItems: 'flex-start',
        marginRight: 10
    },
    iconSize: {
        width: 25,
        height: 25
    },
    testTitleContainer: {
        flex: 2,
        alignSelf: 'center'
    },
    testTitle: {
        fontSize: 14,
        color: '#333'
    },
    testSubTitle: {
        fontSize: 10,
        color: '#999'
    },
    arrowRight: {
        flex: 3,
        alignSelf: 'center',
        alignItems: 'flex-end',
    },
    arrowRightSize: {
        width: 5,
        height: 10
    }



});

export const iconStyles = {
    iconSearch: require('../../images/search-icon.png'),
    iconTest: require('../../images/test-icon.png'),
    arrowRight: require('../../images/arrow-right.png'),
}
