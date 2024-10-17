import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Formik} from "formik"
import { Input, Button, Toggle } from '@ui-kitten/components';
import * as Yup from 'yup'


const FormikYup = () => {
const registerSchema = Yup.object().shape({
name: Yup.string().required("Zorunlu Alan"),

surname: Yup.string().required("Zorunlu Alan"),

phone: Yup.string().required("Zorunlu Alan").matches(/^\+?\d{1,4}-?\d{1,3}-?\d{1,3}-?\d{1,4}$/, "Geçerli bir telefon numarası giriniz"),
email: Yup.string().email("Geçerli bir e-posta adresi giriniz").required("Zorunlu Alan"),

password: Yup.string().required("Zorunlu Alan").matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/,
  'Şartlar sağlanmıyor!!!!',
),
passwordConfirm: Yup.string().required("Zorunlu Alan").oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor'),

agrementConfirm: Yup.bool().required("Zorunlu Alan").oneOf([true], "Kullanım şartlarını kabul etmeniz gerekiyor"),
})

  return (
    <View style={styles.contanier}>

    <View  style={{
        padding:20, 
        backgroundColor: '#00E096',
        minHeight:125,
        justifyContent:"flex-end",
        alignItems:"center",

        }}>
        <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>Kayıt Oluştur</Text>
    </View>
    
    <View style={{flex:1, padding:10}}>
        <ScrollView>
            <Formik
            initialValues=
            {{ email: '', name: "", surname:"", phone: "",password: "",passwordConfirm: "", agrementConfirm:false}}

            validationSchema={registerSchema}

            onSubmit={values=> Alert.alert("Form Değerleri", JSON.stringify(values, null, 2))}>
                {
        ({handleChange, handleSubmit, values, setFieldValue, errors }) =>(
        <View>
           <Input 
           size='large' 
           value={values.name} 
           label={"İsim"} 
           placeholder='İsim giriniz'
           onChangeText={handleChange("name")}
           style={{marginVertical:10}}
           status={errors.name ? "danger" : "basic"}
           caption={errors.name}
           />
           <Input 
           size='large' 
           value={values.surname} 
           label={"Soyisim"} 
           placeholder='Soyisim giriniz'
           onChangeText={handleChange("surname")}
           style={{marginVertical:10}}
           status={errors.surname ? "danger" : "basic"}
           caption={errors.surname}
           />
           <Input 
           size='large' 
           value={values.email} 
           label={"E-mail"} 
           placeholder='E-mail giriniz'
           onChangeText={handleChange("email")}
           style={{marginVertical:10}}
           status={errors.email ? "danger" : "basic"}
           caption={errors.email}
           />
           <Input 
           size='large' 
           value={values.phone} 
           label={"Tel"} 
           placeholder='Tel giriniz'
           onChangeText={handleChange("phone")}
           status={errors.phone ? "danger" : "basic"}
           style={{marginVertical:10}}
           caption={errors.phone}
           />
           <Input 
           size='large' 
           value={values.password} 
           label={"Şifre"} 
           placeholder='Şifre giriniz'
           onChangeText={handleChange("password")}
           status={errors.password ? "danger" : "basic"}
           style={{marginVertical:10}}
           caption={errors.password}
           />
           <Input 
           size='large' 
           value={values.passwordConfirm} 
           label={"Şifre Tekrar"} 
           placeholder='Şifre tekrarını giriniz'
           onChangeText={handleChange("passwordConfirm")}
           status={errors.passwordConfirm ? "danger" : "basic"}
           style={{marginVertical:10}}
           caption={errors.passwordConfirm}
           />
           <View>
           <Toggle
                    checked={values.agrementConfirm}
                    onChange={value => setFieldValue('agrementConfirm', value)}>
                    Kullanıcı Sözleşmesini ve Gizlilik Anlaşmasını kabul
                    ediyorum.
                  </Toggle>
                  {errors.agrementConfirm && (
                    <Text style={{color: 'red'}}>{errors.agrementConfirm}</Text>
                  )}
                          
 
           </View>
          <Button style={{marginTop:30}}
          onPress={handleSubmit}
          status='success'
          > 
          KAYDET
          </Button>          
        </View>
         )
                }
            </Formik>
        </ScrollView>
    </View>
   
    </View>
  )
}

export default FormikYup

const styles = StyleSheet.create({
    contanier: {
      flex: 1,
      
    },
  
})