import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "../Redux/Reducers/CartReducer";

import {
  decrementProductQuantity,
  incrementProductQuantity,
} from "../Redux/Reducers/ProductReducer";
import GoToCart from "./GoToCart";
import { useNavigation } from "@react-navigation/native";

const Products = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  console.log("cart arr ", cart);

  // to be added to GoToCart.js bottom pane
  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  //total cart quantity.
  const cartQuantity = cart
    .map((item) => item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const product = useSelector((state) => state.product.product);
  // console.log("product arr",product)

  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      product.map((service) => dispatchEvent(getProducts(service)));
    };
    fetchProducts();
  }, []);

  const productList = [
    {
      id: 1,
      title: "pants",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ulwxYS8e9oSpV_L-C_oL_G_Zobywcw_pFA&usqp=CAU",
      quantity: 0,
      price: 15,
    },
    {
      id: 2,
      title: "socks",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERDw8PDw8PDw8PDw8PDw8QDxEPEA8PGBQZGRkUGBgcIS4lHB44HxgYKDg0KzAxNUM1GiQ9QDszPzw0NTEBDAwMEA8QGhISGDQrJCM0NDQxNDQ0NDE0NDQ0NDQ0MTQxNDQ0NDQ0NDQ0NDQxNDE0NDQ0NDQxNDQxMTQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIEBQMGB//EADUQAAICAQMCBQIEBQMFAAAAAAABAhEDEiExBEEFIlFhcROBMpGx8CNCUmKhcsHRFBUz4fH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMCBAX/xAAuEQEAAgEDAgIJBAMAAAAAAAAAAQIRAyExEkEEYSIyUXGRobHR8BMUgcEF4fH/2gAMAwEAAhEDEQA/AP0igAZQBQwAVAMAAQwIEAwAQUMAEFDACaGMVBSAoVEE0Ki6EBIDEBIixAQAxAIRQgEIbEBLBjBkkSSyyWQKgAAN4wA0QAAwEAwAQDABAMCBAAAAAAAAAAAAAIAGQSKiiQARVCCkQWICAGIBMRTEwJYimSBLBjYmSQgAQHQAANEADoCSEAAADEekIXbfC5ObWitZtPEHKVFvhDcWjRKko1sux5zlXPfg+Zf/ACFon0YjDWNN5NUBn62Tv0aPXDLVFN89/k38L4yNaZrMbw5vTp3VQixHtcFYigAkCiQAAABCHQASDGIgQAACZJTEFSAxASxMoTAkTGxMgQAAwjeBQGiAAESVBJZIAlbSurdGjUkqXBy+olOV6G04Sai1pe9cet2q+aHlT6jpqhN4/qJXLRq2UvNHS+zSa7OnaZK4vFomPL6fdpSGnJ1+NNb/AA4xlLvXZHnLq4SnSlcoq9L2kvs9zzwdFDHFqOp6pOUnenVJtu6jS5bPZ9Fhx76IuduTbV+Z8v8AU+V4jRpp76lIxM9ptn7NYeGeWqUpPez36OL0bqua+B48m2ySXskicj21Juk6fqmeTR1NPR1Z1KRMx7JmPsX9KMNDEZo9Q1zujVFpq07R9nQ8RTWjNezC1ZjkhFMRu5IAACQAAAQwAQhiATENiACRsGQSIoTCpYmNgESSyhMKkCgCN4AB2gAYAQOKtr5QMUW9Ua7yj+V7hVdZgWRNcOmk93V+1oSTSSbtpJNvv7nr1E1BOUnS2Xu29kku7OX/ANzeRyhgx6p/SnODnKKxqapQjNxtpNt00n+CfpRPRi3nPzx+cvRExDdR69Sk0/dbf8nInLqktW1+VuKcVHi5JLS37LzHQw5NePd+aLcZVtx7dtqPH4nSnxGKxExjPMThc5Z45FFNSaSXL4SM/U+IYsdLValdPTKSlXNNLcyeNzljimouUfNq2bppX+il+XZ0e0OnTqUopT3dRbqF/wAqff59u3Bh+yrW3RWucRmZtM+fER7l7qhnjNXBqStp12a5TXZntgzuD9nyjB1nTtqDgtouTcE9N3T1Kq329Vy37PBPLKeTQ5ZNLhqjJuGNpXTjK99VxlvGP5NHrteujXeMRHwS09ph9fGaklJcMZz/AAjM5Qp1/VGpOSa9baT/AMHQZtExMZh57RicEIbEVASAAAAIAEMTAGIYgEIYmAmJjEyKTExskICRgwEAAFdAAA7cgAACWenTwWtPfyp0u29b/v1ZJ6dNy/hBa8sXi7V44z/8b+pflclrpKKaTTeznsvY8/C0vparTlKeRya41a3svZKkvZI3dTKD8s5RT5VyUWu1p/c5UemyY88J4suJ9LKDWWDg3klkSSjKM09PCSe17c8VxGnaNWbxxMRHubRG+WvqJ0n8HPw9f9PItb/hz2ltemXaX+x79VPsc3wuM8vU3PSo4k5uCkpNO/Lqra+/Pbju+rTjDWZiKul12Pp+oioTWPKlKM1CaTalB2paX6NDcT06roYyepJfijOtKdSTtSXH6lRg9K1JKVK1F2r9vYRMzzHH5t+Zc0tmGfScvPjwxnKevS1LVJRVq71Srbu+aNniCnKUcUY5FGUXKU0vJylp1etW69u+6c/9FHRpk3JVG161xvV/5MNSdTq6aV47z/WN5Wd+zR02VKUZJpxdU09mn6HWZ8w+n+njlH6k5uWVThr0LRenyx0pbbSe/eTPo8ErhB/2o0rPaWWr2UJjYmdMkgAAAhkgMQAACYAAmAMTAkRRIAIYEEsllMTAQAAV0AADtyAAAAePIoyptK4ydt1umtv8knjnjbiv9TunWy9U7XN/Z/Jza3TGVh49N0c7lkyJRlkanLFLz6Ht3T06tu18Ldnn1PRpu1PTTb2W7dt7y57+voa+kltOLk5aZJq1+GDW0VL+bhv13VpbCzdzj9voz6UV5775+LetYmHBzKblLDOOScJ45fxbhGndOGz1XTtOuzt3z1/CenWODa4k/L2qK7JcJXfBh6lu3St02l6vsjs4IaIQg3bjGMW/VpbssUjMZ3mOJnk1dqxD0sz9VNwi2u3Dq9O6Tdd6u/se4skVKLi901X/AKO2NbYlxfDE28yntkbxzlDVdKUIu/d3qj8wNUkTl8PeqM45JR0alfDjBu9PG6u+f9kzHhyzxxmupzxzSlOcoPHicUse1R2vU/V+/BjpzaunEam2O+YxPnzn4vRWcRuz+IxlKcN9MUnTulJt3T70lG/hNHc8MyXj03bi2ubORLJjyZK8+vFFOUWpRSjOmv7ZfgXF8e+/Q8NzJznFPeNxfzSYrGb9cTtMbff883N4iYy6LEymSasEgAAIQxAIAEAxAAAJjEAEDYAJiGIgQmNiYAIAA3jADtAAAAHrgacVJLvJXW/NP9DxPbpIxUFpTScpSabb8zk2+fdsscu68snUeIY4zjByuTyRx7K6m+F/843uqdeHXdTHHFSkpyTnGCUIOe8nSbr8K93SXcxv+HLG5RaeOWjLJxfP0vxar3V8Kls5Pl09+WXl+xno6n6kTnmJmPd7M/VrScuVh6uE88IK1LUtmvRq7puvufQHG6fHqyxdK1NPj03OySnXv1Y/jb5OdbOYiSAAR3LF4Z+n1zi7Wmnadtak9mlfpf5Lk85YIp3VtKre7o0ZG7hV3rWyq2u639hdTDc5jTp1Tbp39v8A3+v5b6eMOdniu1IxY8ixZ4SvbJPVLtVVB/bzJ/Y15+phvpX1Gm4ut1qTpq/W/sYeoyW4xyRjFNx0vXHVGT24fzX3MdXV0426t8+e0u7TExh9KyWTgdwhf9KKZu8xCGIoTEymQyBAJjABASBRIAwEACABAKyBiCxAMQABvGIDtDAAAlmzHGopGKT29ftZWfJLLhyRwyjDJ+B64uShLZtNJp/he3yvgscu6I6jJilTlJOt1JSa49JI5EMH0lOMcs82Oc5ThrcH9OL/AJIOKXlXa7e/Jvh0SxxcbbUrcl/LbbeyrZbvucvr+meqWTHJvJTpOVKTp1F0uLMpnVjeaR/E7/OI+rauc5w3eEPVLI7i1HTFU7abvUn6cI6Zj8LjH6SnGqm3K13+/wA2bDuvDHUnNpJgAFcAzdN1EsqyOSUdM1GKrzKLhGav38zNBmn0mRTUoSrbS+KlBO0pXy7b+3FbnFrWrMYjMd/6n89rTTmYecsUIJqEYxTbflSjbfL2Ob1yTi02k1543Tdx32/fc6GJZnB/9RDHCeqe2Kcpw0KXldtJ3VWcXq8N5m/M6lF+a2qSW0Y8Ncvfve3I1rdFcy2mdn0+L8Ef9Mf0Gx9kJnTzJAAAGSymSwIYAxMgQAIAABAMkYmQIQMAABMQAADA3FElHaAVjIAuMNXwva/tR5ZeshiqM5Sk5vZUnVtJL13eyve/8aMT8ru/xOku+yMXVdNN5fqQSScIQlGSi2lBzacfR+d/kcakWis304zbDasYjMGuqjOCnHVpe8W4tWvX4Od1DUm12dp/BM88+lxR+pinLHBQxReKMs80toqUoQt1XfsPLJN7/v8A4O5tmM/WMNqN/gsr6bH7Jq6q9/Q3GHwjHGGLRHiMpc++5uOabVh5bRiZggADpyk8+p6iX1I4YKX4FKUoNJrfht8bfqPI3T087V37nvhjFr6miEZzjFTlFJt6bSTl3q3+bOZiLZrnHu5/JaUjLn5+junKctlLu73/ALufSjnZrhNY5vWp63F6a0wVeWW+/PPwd7Kjj+JR8kmlcopzhtbU16E/RisT0R85n6y2iMcOrilcYv1iv0GzF4Lnc8Ebu4SlDfduKflb+zT+5uYraLREw808pABHQBMbJYEsljYmQIAEAAIAAQCZAMkokAABEDAkCjogIZ2gEBWN+Zd63r1olp6YmfYuGyqXv3PKbPWML3lu/Tt+R45or0X5I+bfw+vqelbUx5b/AHhvEwy5kc3LFXx+/wBDbndJ1sc+WR3ur91szz3r4vS3pfq8v9S1pMNPgeKUYTUpOfmVanbqjpmXw+K0uS/m7/CNLPq+HtN9Ktp7xl5dT1pJisGSbODjTlFWr3aTSd/BPX5nBRjFXOWppylpioxq2325X2vnhvFC8kX/AERbr3ltf+Ge3V4NaXmcJRdwkuz913RLRaaTFOW1PV2cnpsLyfxcspzlGeaEY65xhGOrQ/KnvK4N3ytTV0eXUdPFcWn/AFW7v9T3zYsuJTnjh9Zynbxa4xcrauSlKkny/cXUO0cRSLVib03xjz+PPzaVjPKfBJqssLWuM05xTvaS2l8On90zpM5HhOVvNki46UoPurlUlTpcd/3x12dV4wwv60kSUxHTgmIAJhUsllMlkEiGyQAQxWAyWxWBACAQBYAFgFgIAOiAAaIGysX4kAEtwRy3QPDOwAx7NXN6p7HNb3ADC7arsdE/4cPv+rPZjA9dPVh5r+tKWSAHTl7dNCtUu7r8l+2e7fx+QAfB8Rq3tqWibTtL0V4h4T+3HoYepgvT/IAeS3iNXTmOm8/GWkMfh+CMMi07Kpbb7fH77I6jAD7X+OvN9GZtzmWGrGLEIAPeyITAAEyQAkqTIYAQJiAAJEAEAxWAAAAAAAAB/9k=",
      quantity: 0,
      price: 100,
    },
    {
      id: 3,
      title: "shirt",
      image:
        "data:image/jpeg;base64,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",
      quantity: 0,
      price: 10,
    },
    {
      id: 4,
      title: "jacket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGcisYFxERQ3ImyTXxeUrgClsDFebbZ_cW2A&usqp=CAU",
      quantity: 0,
      price: 30,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.addItemText}>Let us handle your laundry</Text>
      <View style={styles.containerProducts}>
        <FlatList
          data={productList}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Pressable key={item.id}>
                <Image style={styles.serviceImg} source={{ uri: item.image }} />
                <View style={styles.itemText}>
                  <Text>{item.title}</Text>
                  <Text>R{item.price}</Text>
                  
                  {cart.some((c) => c.id === item.id) ? (
                    <Text>
                      <AntDesign
                        name="plus"
                        size={24}
                        color="orangered"
                        onPress={() => {
                          dispatch(incrementProductQuantity(item));
                          dispatch(incrementQuantity(item));
                        }}
                      />

                      <Text>{item.quantity}</Text>
                      
                      <AntDesign
                        name="minus"
                        size={24}
                        color="skyblue"
                        onPress={() => {
                          dispatch(decrementProductQuantity(item));
                          dispatch(decrementQuantity(item));
                        }}
                      />
                    </Text>
                  ) : (
                    <MaterialCommunityIcons
                      name="basket-plus"
                      size={24}
                      color="orangered"
                      onPress={() => {
                        dispatch(addToCart(item));
                        dispatch(incrementProductQuantity(item));
                      }}
                    />
                  )}
                </View>
              </Pressable>
            </View>
          )}
        />
      </View>
      {/* go to cart component */}
      {/* only render when cart has something */}
      {cart.length > 0 ? (
        <GoToCart
          price={totalPrice}
          totalItems={cartQuantity}
          title={"Go to delivery"}
          onPress={() => navigation.navigate("Cart")}
        />
      ) : null}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    alignItems: "center",
  },
  serviceImg: {
    width: 150,
    height: 150,
    borderRadius: 125,
  },
  itemText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  productItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
  },
  addItemText: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "900",
  },
  containerProducts: {
    height: 250,
  },
});
