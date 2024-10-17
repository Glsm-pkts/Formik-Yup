import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from "@eva-design/eva"
import FormikYup from "./src/example/FormikYup"


const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <FormikYup/>
    </ApplicationProvider>
  )
}

export default App

