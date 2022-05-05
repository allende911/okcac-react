import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex, Select, Text } from '@chakra-ui/react';
import { helpOptions } from './helpOptions';
import { getHelpFlex, getHelpSelect, getHelpText } from './getHelpStyles';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export const GetHelp = () => {
  const [selection, setSelection] = useState(helpOptions[0].option.slug);

  const handleSelect = event => setSelection(event.target.value);

  return (
    <Flex {...getHelpFlex}>
      <Text {...getHelpText}>I want to:</Text>
      <Flex align="center">
        <Select {...getHelpSelect} onChange={handleSelect} value={selection}>
          {helpOptions.map(links => (
            <option key={links.key} value={links.option.slug}>
              {links.option.label}
            </option>
          ))}
        </Select>
        <Link to={selection}>
          <Button
            p="1"
            backgroundColor="blue.600"
            w={['full', '1xl', '2']}
            shadow="md"
            border="1px"
            borderColor="gray.600"
          >
            <FaArrowAltCircleRight />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
