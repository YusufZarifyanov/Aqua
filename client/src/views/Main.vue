<template>
    <Navbar :isMain="true"></Navbar>
    <Home></Home>
    <Services></Services>
    <Restrictions></Restrictions>
    <Rates></Rates>
    <Works></Works>
    <Price></Price>
    <Steplist></Steplist>
    <ExpansionPanel></ExpansionPanel>
    <Contacts></Contacts>
</template>
  
<script>
  import Navbar from '@/components/Navbar'
  import Home from "@/components/Home";
  import Services from "@/components/Services";
  import Works from "@/components/Works";
  import Price from "@/components/Price";
  import Steplist from "@/components/Steplist";
  import ExpansionPanel from "@/components/ExpansionPanel";
  import Contacts from "@/components/Contacts";
  import Restrictions from "@/components/Restrictions"
  import Rates from "@/components/Rates.vue";
  
  export default {
    components: {
      Navbar,
      Home,
      Services,
      Works,
      Price,
      Steplist,
      ExpansionPanel,
      Contacts,
      Restrictions,
      Rates
    }
  }
</script>
