import React, { FC } from 'react';
import { Text} from '../Text';
import { Canvas } from '../Canvas';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Contact: FC = () => {
  return (
    <Canvas css={{
        maxWidth: '980px',
    }}
    > 
        <Heading>FEEDBACK</Heading>
        <Subheading>Want to sell or supply our products?</Subheading>
        <Subheading>We'd love to hear from you!</Subheading>

        <p>
            <Text>
              <FontAwesomeIcon icon={faMapMarkerAlt} css={{fontSize: '1.8em', verticalAlign: 'middle'}} /> Chicago, IL
            </Text>
        </p>

        <p>
            <Text>
              <FontAwesomeIcon icon={faPhone} css={{fontSize: '1.8em', verticalAlign: 'middle'}} /> Phone: xxx-xxx-xxxx
            </Text>
        </p>
        <p>
            <Text>
              <FontAwesomeIcon icon={faEnvelope} css={{fontSize: '1.8em', verticalAlign: 'middle'}} /> Email: mail@mail.com
            </Text>
        </p>

    </Canvas>
  );
}
