import React from 'react';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
//import BookPreview from './BookPreview';
//import books from '../data/books';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Section>
      <Heading strong={false} align='center'>
        It Is Working!
      </Heading>
      <Columns alignContent='center'>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    <Paragraph align='center'>
    Lorizzle you son of a bizzle dolor dang doggy, crazy adipiscing elizzle.
    Get down get down shiznit velit, shizzle my nizzle crocodizzle volutpizzle,
    suscipit check it out, gravida bow wow wow, the bizzle.
    Pellentesque check it out ass da bomb. In hac habitasse crazy dictumst.
    My shizz dapibizzle. Yo mamma tellus urna, shizzlin dizzle dawg, mattis
    hizzle, eleifend vitae, nunc. Yo suscipizzle. Integizzle semper
    crunk things brizzle.
    </Paragraph>
  </Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    <Paragraph align='center'>
    Lorizzle you son of a bizzle dolor dang doggy, crazy adipiscing elizzle.
    Get down get down shiznit velit, shizzle my nizzle crocodizzle volutpizzle,
    suscipit check it out, gravida bow wow wow, the bizzle.
    Pellentesque check it out ass da bomb. In hac habitasse crazy dictumst.
    My shizz dapibizzle. Yo mamma tellus urna, shizzlin dizzle dawg, mattis
    hizzle, eleifend vitae, nunc. Yo suscipizzle. Integizzle semper
    crunk things brizzle.
    </Paragraph>
  </Box>
</Columns>
      </Section>
    );
  }
}
