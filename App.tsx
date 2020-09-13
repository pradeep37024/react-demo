import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { demoStyles, iconStyles } from './src/common/Style';
import { TextStrings } from './src/common/TextString';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={demoStyles.mainBgColor}>
        <View style={demoStyles.listingHeader}>
          <View style={demoStyles.titleArea}>
            <Text style={demoStyles.headTitle}>{TextStrings.HEADER_TEXT.TITLE}</Text>
            <Text numberOfLines={1} style={demoStyles.headSubTitle}>{TextStrings.HEADER_TEXT.SUB_TITLE}</Text>
          </View>
          <View style={demoStyles.searchArea}>
            <Image source={iconStyles.iconSearch} style={demoStyles.searchIcon} />
          </View>
        </View>

        <View style={demoStyles.schoolLevel}>
          <Text style={demoStyles.schoolLevelText}>Tests</Text>
        </View>

        <View style={demoStyles.assignContainer}>
          <View style={demoStyles.testIcon}>
            <Image source={iconStyles.iconTest} style={demoStyles.iconSize} />
          </View>
          <View style={demoStyles.testTitleContainer}>
            <Text style={demoStyles.testTitle}>{TextStrings.ASSIGN_TEXT.TITLE}</Text>
            <Text style={demoStyles.testSubTitle}>{TextStrings.ASSIGN_TEXT.SUB_TITLE}</Text>
          </View>
          <View style={demoStyles.arrowRight}>
              <Image source={iconStyles.arrowRight} style={demoStyles.arrowRightSize} />
          </View>
        </View>
        
      </View> 
    );
  }
}

export default HelloWorldApp;
