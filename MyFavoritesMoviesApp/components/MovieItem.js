import React from 'react';
import { View, Text, Image, StyleSheet, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
	movieContainer: {
		width: Dimensions.get("window").width / 3 - 10,
		marginHorizontal: 5,
		marginVertical: 6,
	},
	movieImageContainer: {
		height: 200,
	},
	moviePosterImage: {
		flex: 1,
		borderRadius: 10,
	},
	movieTitle: {
		fontSize: 14,
		fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
	},
	movieFavoriteButton: {
		position: 'absolute',
		top: 5,
		left: 5,
	}
});

const MovieItem = ( props ) => {
  return (
		<View style={styles.movieContainer}>
			<View style={styles.movieImageContainer}>
				<Image style={styles.moviePosterImage} source={{ uri: `https://image.tmdb.org/t/p/w154/${props.item.poster_path}` }}/>
			</View>
			<Text style={styles.movieTitle} numberOfLines={1}>{props.item.title}</Text>
			<TouchableOpacity style={styles.movieFavoriteButton} onPress={props.onToggleFavorite}>
				<Ionicons name="ios-heart" size={24} color={props.isFavorite ? "red" : "#fff"}/>
			</TouchableOpacity>
		</View>
	);
}

export default MovieItem;