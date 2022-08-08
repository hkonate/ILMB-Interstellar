import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';


export default function App() {
  console.log(Constants.statusBarHeight);
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor='black' />
      <ScrollView style={{ marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0, }}>
        <View style={styles.container}>
          <View style={styles.logoBackground}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>IMDb</Text>
            </View>

          </View>
          <View style={styles.movieContainer}>
            <Text style={styles.title}>Interstellar</Text>
            <View style={styles.infoMovieContainer}>
              <Text style={styles.infosContainer}>2014</Text>
              <Text style={styles.infosContainer}>PG-13</Text>
              <Text style={styles.infosContainer}>2h 49min</Text>
              <Text style={styles.infosContainer}>Adventure, Drama, Scifi</Text>
            </View>
            <>
              <View style={styles.descriptionContainer}>
                <Image style={styles.descriptionImage} source={{
                  uri: "https://m.media-amazon.com/images/M/MV5BZWNlZjhiNTAtYzM3OS00NTA3LWFhNzgtNzRhYjA1NTMzYTUwXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg",
                }} />
                <View style={styles.descriptionRightBox} >
                  <Text style={styles.descriptionText} >A team of explorers travel through a wormhole in space  in an attempt to ensure humanity's survival.</Text>
                  <View style={styles.descriptionBtn}>
                    <Text style={styles.descriptionBtnText}>+ add to watchlist</Text>
                  </View>
                </View>

              </View>
              <View style={styles.ratingContainer} >
                <View style={styles.ratingLeft}>
                  <View style={styles.ratingLeft}>
                    <FontAwesome name="star" size={24} color="yellow" style={{ marginBottom: 5 }} />
                    <View style={styles.col1}>
                      <Text style={styles.bigRating} >8.6</Text>
                      <Text style={styles.white}>/10</Text>
                    </View>

                  </View>

                  <Text style={styles.miniGrey}>1.1M</Text>
                </View>
                <View style={styles.ratingCenter}>
                  <EvilIcons name="star" size={32} color="white" style={{ marginBottom: 5 }} />
                  <Text style={styles.white}>RATE THIS</Text>
                </View>
                <View style={styles.ratingRight}>
                  <View style={styles.greenBox}>
                    <Text style={styles.white}>74</Text>
                  </View>
                  <Text style={styles.white}>Metascore</Text>
                  <Text style={styles.miniGrey} >46 critic reviews</Text>
                </View>
              </View>
            </>

          </View>
          <View style={styles.separator}></View>
          <View style={styles.castContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Top Billed Cast</Text>
              <Text style={styles.blue}>SEE ALL</Text>
            </View>
            <ScrollView style={styles.actorsCarroussel} horizontal={true}>
              <View style={styles.actor}>
                <Image style={styles.actorImage} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Matthew_McConaughey_2019_%2848648344772%29.jpg/480px-Matthew_McConaughey_2019_%2848648344772%29.jpg" }} />
                <View style={styles.nameCharActor}>
                  <Text style={styles.actorName} numberOfLines={1}>Matthew McConaughey</Text>
                  <Text style={styles.characterName}>Cooper</Text>
                </View>
              </View>
              <View style={styles.actor}>
                <Image style={styles.actorImage} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Anne_Hathaway_in_2017_%28restauration%29.jpg/500px-Anne_Hathaway_in_2017_%28restauration%29.jpg" }} />
                <View style={styles.nameCharActor}>
                  <Text style={styles.actorName} numberOfLines={1}>Anne Hathaway</Text>
                  <Text style={styles.characterName}>Brand</Text>
                </View>
              </View>
              <View style={styles.actor}>
                <Image style={styles.actorImage} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jessica_Chastain.jpg/520px-Jessica_Chastain.jpg" }} />
                <View style={styles.nameCharActor}>
                  <Text style={styles.actorName} numberOfLines={1}>Jessica Chastain</Text>
                  <Text style={styles.characterName}>Murphy</Text>
                </View>
              </View>
              <View style={styles.actor}>
                <Image style={styles.actorImage} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Sir_Michael_Caine%2C_28th_EFA_Awards_2015%2C_Berlin_%28cropped%29.jpg" }} />
                <View style={styles.nameCharActor}>
                  <Text style={styles.actorName} numberOfLines={1}>Michael Caine</Text>
                  <Text style={styles.characterName}>Brand</Text>
                </View>
              </View>
              <View style={styles.actor}>
                <Image style={styles.actorImage} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mackenzie_Foy_Cannes_2015.jpg/440px-Mackenzie_Foy_Cannes_2015.jpg" }} />
                <View style={styles.nameCharActor}>
                  <Text style={styles.actorName} numberOfLines={1}>Mackenzie Foy</Text>
                  <Text style={styles.characterName}>Murphy</Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.creatorsName} >
              <Text style={styles.actorName} >Director</Text>
              <Text style={styles.characterName}>Christopher Nolan</Text>
            </View>
            <View style={styles.creatorsName} >
              <Text style={styles.actorName} >Writers</Text>
              <Text style={styles.characterName}>Jonathan Nolan (written by) and Christopher Nolan (written by)</Text>
            </View>
          </View>
        </View>

      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {

  },
  logoBackground: {
    backgroundColor: "#393939",
    paddingVertical: 11,
    height: 55,
    paddingLeft: 20,
  },
  logoContainer: {
    borderColor: "#FEFEFE",
    borderStyle: "solid",
    borderWidth: 2,
    width: 56,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#FEFEFE",
  },
  title: {
    fontSize: 30,
    textTransform: "capitalize",
    color: "white"
  },
  text: {
    color: "white"
  },
  movieContainer: {
    backgroundColor: "#212121",
    paddingHorizontal: 20
  },
  infoMovieContainer: {
    flexDirection: "row",
  },
  infosContainer: {
    color: "#A9A9A9",
    marginRight: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginVertical: 28,
  },
  descriptionImage: {
    width: 95,
    height: 138,
    marginRight: 13,
  },
  descriptionRightBox: {
    width: "71%",
  },
  descriptionText: {
    color: "white",
    paddingRight: 20,
  },
  descriptionBtn: {
    marginTop: 20,
    backgroundColor: "#0277BD",
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: "100%"
  },
  descriptionBtnText: {
    fontSize: 15,
    color: "white",
    textTransform: "uppercase"
  },
  ratingContainer: {
    flexDirection: "row",
    width: 300,
    marginLeft: 50,
    paddingBottom: 20
  },

  ratingLeft: {
    alignItems: 'center',
  },
  col1: {
    flexDirection: "row",
    alignItems: 'center'
  },
  ratingCenter: {
    alignItems: 'center',
    marginLeft: 65,
  },
  ratingRight: {
    alignItems: 'center',
    marginLeft: 53,
  },

  separator: {
    backgroundColor: "#0F0F0F",
    height: 15,
  },

  castContainer: {
    paddingLeft: 20,
    backgroundColor: "#212121",
  },
  white: {
    color: "white"
  },

  miniGrey: {
    color: "#424242",
    fontSize: 11
  },

  greenBox: {
    height: 20,
    width: 20,
    backgroundColor: "#94D588",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },

  bigRating: {
    fontSize: 18,
    color: "white",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    marginVertical: 20
  },
  blue: {
    color: "#0F8CC6",
    fontWeight: 'bold',
    fontSize: 15
  },
  actor: {
    marginBottom: 30,
    marginRight: 10
  },
  actorImage: {
    width: 129,
    height: 191,
  },
  nameCharActor: {
    width: 129,
    height: 56,
    backgroundColor: "#2A2A2A",
    padding: 10,
  },
  actorName: {
    color: "#EEEEEE",
  },
  characterName: {
    color: "#A1A1A1",
  },
  creatorsName: {
    marginBottom: 20
  }
});
