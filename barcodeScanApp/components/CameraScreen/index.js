import React from 'react';
import {
    Text,
    View,
    Vibration
} from 'react-native';
import {
    Camera,
    Permissions
} from 'expo';

export default class CameraScreen extends React.Component {
    static navigationOptions = {
        title: 'ScanBarcode',
    };

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        autoFocus: Camera.Constants.AutoFocus.on
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    barcodeRead = (e) => {
        Vibration.vibrate(500);
        if (e.data != null){
            this.props.navigation.navigate('Home', {
                barcode: e.data,
            });
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        } else {
            return(
                <View style={{ flex: 1 }}>
                    <Camera 
                        style={{ flex: 1 }} 
                        type={this.state.type}
                        autoFocus={this.state.autoFocus}
                        onBarCodeScanned={this.barcodeRead}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}
                        >
                            <View  
                                style={{
                                    flex: 1,
                                    alignSelf: 'flex-end',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                
                                <Text
                                    style={{ fontSize: 14, marginBottom: 8, color: 'white' }}
                                >
                                    {' '}Alinhar código de barras com o exemplo para ser lido{' '}
                                </Text>
                            </View>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}