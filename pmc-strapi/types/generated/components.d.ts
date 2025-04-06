import type { Schema, Struct } from '@strapi/strapi';

export interface LocationDetailsLocationDetails extends Struct.ComponentSchema {
  collectionName: 'components_location_details_location_details';
  info: {
    description: '';
    displayName: 'Location Details';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.Enumeration<['TN', 'VA', 'KY']> &
      Schema.Attribute.Required;
    zipcode: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: '10';
          min: '5';
        },
        string
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'location-details.location-details': LocationDetailsLocationDetails;
    }
  }
}
