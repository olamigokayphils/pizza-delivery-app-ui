import React from "react"
import { Platform } from "react-native"
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components'
import { AntDesign } from "@expo/vector-icons"
import IconBadge from 'react-native-icon-badge';


export default function App() {
  return (
    <Container>
      <StatusBar style="light" backgroundColor="rgba(0, 0, 0, 0.1)"/>
      <KitchenFoodBackground source={require("./assets/pizza.jpeg")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="#FFF" />
              <Text heavy style={{ marginLeft: 10 }} >Order Meal</Text>
            </Back>

            
            <IconBadge
            MainElement={
            <AntDesign style={{ margin: 10 }} name="shoppingcart" size={24} color="#fff" />}
            BadgeElement={
              <Text style={{color:'#FFFFFF'}}>{4}</Text>
            }/>
          </MenuBar>

          <MainIngredient>
            <Text large heavy>Spicy beaf pizza</Text>
            <Divider/>
            <Text>Lean ground beef</Text>
            <Text>Pizza crust</Text>
            <Text>Red bell pepper</Text>
            <Text>Mozzarella cheese + Pizza sauce</Text>
          </MainIngredient>

          <Button>
            <Text bold small>ADD TO CART</Text>
          </Button>
        </SafeAreaView>

        <PurchaseContainer>
          <OrderContainer>
            <Text dark heavy large>Order: 2 Pack(s)</Text>
            <IncreaseOrderButton>
              <Text>+1</Text>
            </IncreaseOrderButton>
          </OrderContainer>

          <Text dark heavy large>Price: ₦8,550</Text>
          <Text style={{ marginTop: 10, color: "gray" }} dark small>This meal is 25 min. away from your location</Text>

          <PurchaseButton><Text>Buy Now</Text></PurchaseButton>
        </PurchaseContainer>
      </KitchenFoodBackground>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #FFF
`

const SafeAreaView =  styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? '25px' : '0px'};
  background-color: 'rgba(0, 0, 0, 0.4)'
  
`

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#FFF")};
  font-family: "sans-serif-medium"

  ${({ title, large, small }) => {
    switch(true){
      case title:
        return 'font-size: 32px'
      case large:
        return 'font-size: 20px'
      case small:
        return 'font-size: 13px'
    }
  }}

  ${({ bold, heavy }) => {
    switch(true){
      case bold:
        return 'font-weight: 600';
      case heavy:
        return 'font-weight: 700'
    }
  }}
`

const KitchenFoodBackground = styled.ImageBackground`
  width: 100%;
`

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;

`

const Back = styled.View`
  flex-direction: row;
  align-items: center
`

const MainIngredient = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`

const Divider = styled.View`
  border-bottom-color: #FFFFFF;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px
`

const PurchaseContainer = styled.View`
  margin-top: -16px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`

const OrderContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px
`

const IncreaseOrderButton = styled.TouchableOpacity`
  background-color: rgb(60,179,113);
  padding: 6px 18px;
  border-radius: 100px;
  margin-left: 20px
`

const PurchaseButton = styled.TouchableOpacity`
  margin: 20px 0 48px 0;
  width: 100%;
  background-color: rgb(60,179,113);
  align-items: center;
  justify-content: center;
  padding: 18px 18px;
  border-radius: 100px
`