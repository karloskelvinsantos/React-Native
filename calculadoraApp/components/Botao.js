import React, { Component } from 'react' ;
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class Botao extends Component {

    constructor(props) {
        super(props);

        this.styles = StyleSheet.create({
            areaBotao: {
                flex: this.props.flex ? parseInt(this.props.flex)  : 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#999999',
                backgroundColor: this.props.bg ? this.props.bg : '#e0e0e0'
            },
            textBotao: {
                fontSize: 20,
                fontWeight: 'bold'
            }
        });

        this.state = {

        };
    }
    
    render() {

        return (
            <TouchableOpacity style={this.styles.areaBotao} onPress={this.props.onPress}>
                <Text style={this.styles.textBotao}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

