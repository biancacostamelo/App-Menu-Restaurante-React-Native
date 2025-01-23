import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, Button, TouchableHighlight } from 'react-native';

import { Card } from 'react-native-paper';


export default function App() {
  return (
    <SafeAreaView style= {styles.container}>
      <ScrollView showsVerticalScrollIndicator= {false}>
        <Text style= {styles.h1}>Menu Restaurante</Text>
        <View style= {styles.hr}></View>
        /* Card 1*/
        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-barfisch-pix-115740.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Batata frita</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Batata frita crocante por fora, macia por dentro, o 
          petisco perfeito para qualquer</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>
        /* Card 2*/
        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-chiecharon-1027811.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Bolo de Amêndoas</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Bolo fofinho, recheado e irresistível, ideal para adoçar seu dia com sabor e carinho!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>
        /* Card 3*/
        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-eric-mufasa-578798-1414234.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Bolo Cremoso</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Bolo fofinho, recheado e irresistível, ideal para adoçar seu dia com sabor e carinho!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>

        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-erlianzakia-3093479.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Bolo Red Velvet</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Bolo fofinho, recheado e irresistível, ideal para adoçar seu dia com sabor e carinho!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>

        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-jessbaileydesign-853005.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Cupcake</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Cupcake delicado, com cobertura cremosa e sabor inesquecível em cada mordida. Perfeito para qualquer ocasião!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>

        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-jonathanborba-19264383.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Coxinha</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Coxinha crocante por fora, recheio cremoso e saboroso por dentro. O lanche que conquista!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>

        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-myfoodie-2684556.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Bolo de Paçoca</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Bolo de paçoca macio, com sabor marcante e uma explosão de gostinho de infância!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>

        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-quang-nguyen-vinh-222549-2144200.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Bolo de Chocolate</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Bolo fofinho, recheado e irresistível, ideal para adoçar seu dia com sabor e carinho!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>

        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-quang-nguyen-vinh-222549-2147834.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Bolo de Chocolate</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Bolo fofinho, recheado e irresistível, ideal para adoçar seu dia com sabor e carinho!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>

        <Card style= {styles.card}>
          <Image style= {styles.image} source= {require('./assets/images/pexels-suzyhazelwood-1126359.jpg')}/>
          <View style= {styles.areaText}>
            <Text style= {styles.h3}>Bolo cremoso</Text>
            <Text style= {styles.preco}>R$15,99</Text>
          </View>
          <Text style= {styles.descricao}>Bolo fofinho, recheado e irresistível, ideal para adoçar seu dia com sabor e carinho!</Text>
          <Button title='COMPRAR' color="#F9E79F"/>
        </Card>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 20,
    padding: 0,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center'
  },
  h3: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: 'center'
  },
  preco: {
    fontWeight: 400,
    fontSize: 15,
    textAlign: 'right'
  },
  hr: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginBottom: 7
  },
  card: {
    marginTop: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5
  },
  areaText: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  descricao: {
    marginBottom: 5,
    fontWeight: 300,
  }
});
