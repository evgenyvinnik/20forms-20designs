/**
 * Form generator for each library and form type
 */

import { 
  generateCoreuiForms 
} from './libraries/coreui-forms.mjs'
import { 
  generateFlowbiteForms 
} from './libraries/flowbite-forms.mjs'
import { 
  generateFluentUIForms 
} from './libraries/fluent-ui-forms.mjs'
import { 
  generateGluestackForms 
} from './libraries/gluestack-forms.mjs'
import { 
  generateGrommetForms 
} from './libraries/grommet-forms.mjs'
import { 
  generateHeadlessUIForms 
} from './libraries/headless-ui-forms.mjs'
import { 
  generateMantineForms 
} from './libraries/mantine-forms.mjs'
import { 
  generateMaterialTailwindForms 
} from './libraries/material-tailwind-forms.mjs'
import { 
  generateOrbitForms 
} from './libraries/orbit-forms.mjs'
import { 
  generatePatternFlyForms 
} from './libraries/patternfly-forms.mjs'
import { 
  generatePrimerForms 
} from './libraries/primer-forms.mjs'
import { 
  generateReactSpectrumForms 
} from './libraries/react-spectrum-forms.mjs'
import { 
  generateRSuiteForms 
} from './libraries/rsuite-forms.mjs'
import { 
  generateLightningForms 
} from './libraries/lightning-forms.mjs'
import { 
  generateSemanticUIForms 
} from './libraries/semantic-ui-forms.mjs'
import { 
  generateSemiForms 
} from './libraries/semi-forms.mjs'
import { 
  generateThemeUIForms 
} from './libraries/theme-ui-forms.mjs'

export function generateForm(library, form) {
  switch (library.id) {
    case 'coreui':
      return generateCoreuiForms(form)
    case 'flowbite':
      return generateFlowbiteForms(form)
    case 'fluent-ui':
      return generateFluentUIForms(form)
    case 'gluestack-ui':
      return generateGluestackForms(form)
    case 'grommet':
      return generateGrommetForms(form)
    case 'headless-ui':
      return generateHeadlessUIForms(form)
    case 'mantine':
      return generateMantineForms(form)
    case 'material-tailwind':
      return generateMaterialTailwindForms(form)
    case 'orbit':
      return generateOrbitForms(form)
    case 'patternfly':
      return generatePatternFlyForms(form)
    case 'primer':
      return generatePrimerForms(form)
    case 'react-spectrum':
      return generateReactSpectrumForms(form)
    case 'rsuite':
      return generateRSuiteForms(form)
    case 'lightning':
      return generateLightningForms(form)
    case 'semantic-ui':
      return generateSemanticUIForms(form)
    case 'semi':
      return generateSemiForms(form)
    case 'theme-ui':
      return generateThemeUIForms(form)
    default:
      return generateDefaultForm(form)
  }
}

function generateDefaultForm(form) {
  return `function ${form.name}() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Form submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Form implementation pending</p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ${form.name}
`
}
