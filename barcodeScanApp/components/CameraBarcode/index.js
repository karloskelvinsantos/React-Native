import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class CameraBarcode extends React.Component {

    state = {
        hasCameraPermission: null,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    handleBarcodeScanned = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission == null) {
            return <Text>Requesting for camera permission</Text>;
        }

        if (hasCameraPermission === false) {
            return <Text>No Access to camera</Text>;
        }

        return (
            <View style={{ flex: 1 }}>
                <BarCodeScanner 
                    style={{ flex: 1 }}
                    onBarCodeScanned={this.handleBarcodeScanned}
                />
            </View>
        );
    }
}