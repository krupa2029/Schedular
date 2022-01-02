const UTCSeconds = (sec) => {
  var date = new Date(0);
  date.setUTCSeconds(sec);
  return date;
};

export const mockEventsData = [
  {
    key: 3143150,
    eventId: 3143150,
    title: 'WordCamp Genève 2022',
    venue: 'Genève, Suisse',
    coordinates: [-66.1653224, -17.4139766],
    link: 'https://central.wordcamp.org/wordcamps/wordcamp-geneve-suisse/',
    startEventDate: UTCSeconds(1624492800),
    endEventDate: UTCSeconds(1624665600),
  },
  {
    key: 3143151,
    eventId: 3143151,
    title: 'WordCamp Genève 2022',
    venue: 'Genève, Suisse',
    coordinates: [-66.1653224, -17.4139766],
    link: 'https://central.wordcamp.org/wordcamps/wordcamp-geneve-suisse/',
    startEventDate: UTCSeconds(1624492800),
    endEventDate: UTCSeconds(1624665600),
  },
];

export const mockEvents = [
  {
    id: 3135016,
    date: '2020-12-12T11:35:12',
    date_gmt: '2020-12-12T16:35:12',
    guid: {
      rendered: 'https://central.wordcamp.org/wordcamps/wordcamp-cochabamba/',
    },
    modified: '2021-02-15T12:58:28',
    modified_gmt: '2021-02-15T17:58:28',
    slug: 'wordcamp-cochabamba',
    status: 'wcpt-scheduled',
    type: 'wordcamp',
    link: 'https://central.wordcamp.org/wordcamps/wordcamp-cochabamba/',
    title: {
      rendered: 'WordCamp Cochabamba, Bolivia',
    },
    content: {
      rendered: '',
      protected: false,
    },
    author: 15645268,
    featured_media: 0,
    template: '',
    'Start Date (YYYY-mm-dd)': '1624492800',
    'End Date (YYYY-mm-dd)': '1624665600',
    'Event Timezone': 'America/La_Paz',
    Location: 'Cochabamba',
    URL: 'https://cochabamba.wordcamp.org/2021/',
    Twitter: '',
    'WordCamp Hashtag': '#wordcampcocha',
    'Number of Anticipated Attendees': '150',
    'Organizer Name': 'Carla Doria-Medina Rojas',
    'WordPress.org Username': 'carlisdm',
    'Virtual event only': '1',
    'Host region': 'Cochabamba, Bolivia',
    'Venue Name': '',
    'Physical Address': '',
    'Maximum Capacity': '',
    'Available Rooms': '',
    'Website URL': '',
    'Exhibition Space Available': '',
    _venue_coordinates: '',
    _venue_city: '',
    _venue_state: '',
    _venue_country_code: '',
    _venue_country_name: '',
    _venue_zip: '',
    _host_coordinates: {
      latitude: -17.4139766,
      longitude: -66.1653224,
    },
    _host_city: 'Cochabamba',
    _host_state: 'Cochabamba Department',
    _host_country_code: 'BO',
    _host_country_name: 'Bolivia',
    _host_zip: '',
    session_start_time: 1624572000,
    _links: {
      self: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3135016',
        },
      ],
      collection: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps',
        },
      ],
      about: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/types/wordcamp',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/users/15645268',
        },
      ],
      'version-history': [
        {
          count: 3,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3135016/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 3136184,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3135016/revisions/3136184',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/media?parent=3135016',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 3134933,
    date: '2020-12-07T03:23:23',
    date_gmt: '2020-12-07T08:23:23',
    guid: {
      rendered: 'https://central.wordcamp.org/wordcamps/wordcamp-greece/',
    },
    modified: '2021-04-18T20:08:44',
    modified_gmt: '2021-04-19T00:08:44',
    slug: 'wordcamp-greece-2021',
    status: 'wcpt-closed',
    type: 'wordcamp',
    link: 'https://central.wordcamp.org/wordcamps/wordcamp-greece-2021/',
    title: {
      rendered: 'WordCamp Greece',
    },
    content: {
      rendered:
        '<p><span style="font-weight: 400">We’re happy to announce that WordCamp Greece 2021 Online is happening on 16 &#8211; 18 April 2021.</span></p>\n<p><span style="font-weight: 400">All attendees can participate for free and gain valuable information and virtual networking with other WordPress enthusiasts and experts from various business fields. </span></p>\n<p><span style="font-weight: 400">The WordPress Greek Community is planning to combine development, design, creativity, and tech skills in order to create an outstanding virtual meeting open to all. The organizing team is working eagerly to complete the final details for the upcoming online conference.</span></p>\n<p><span style="font-weight: 400">Now, grab your calendar and book the dates 16 &#8211; 18 April for the WordCamp Greece 2021 Online Conference.  Get our #</span><b>WCGR2021</b><span style="font-weight: 400"> news on Facebook, Twitter, LinkedIn, Instagram, and Tumblr. </span></p>\n<p><span style="font-weight: 400">We hope to be able to share more information with you soon. In the following weeks, the WordCamp Greece 2021 Online agenda will be announced. Stay tuned for more updates!</span></p>\n',
      protected: false,
    },
    author: 14070192,
    featured_media: 0,
    template: '',
    'Start Date (YYYY-mm-dd)': '1618531200',
    'End Date (YYYY-mm-dd)': '1618704000',
    'Event Timezone': 'Europe/Athens',
    Location: 'Greece',
    URL: 'https://greece.wordcamp.org/2021/',
    Twitter: '@wpgreeceorg',
    'WordCamp Hashtag': '#WCGR2021',
    'Number of Anticipated Attendees': '1000+',
    'Organizer Name': 'Fotis Routsis',
    'WordPress.org Username': 'froutsis',
    'Virtual event only': '1',
    'Host region': 'Eastern Europe, Greece',
    'Venue Name': '',
    'Physical Address': '',
    'Maximum Capacity': '',
    'Available Rooms': '',
    'Website URL': '',
    'Exhibition Space Available': '',
    _venue_coordinates: '',
    _venue_city: '',
    _venue_state: '',
    _venue_country_code: '',
    _venue_country_name: '',
    _venue_zip: '',
    _host_coordinates: {
      latitude: 39.7325627,
      longitude: 22.2952294,
    },
    _host_city: '',
    _host_state: '',
    _host_country_code: 'GR',
    _host_country_name: 'Greece',
    _host_zip: '401 00',
    session_start_time: 0,
    _links: {
      self: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3134933',
        },
      ],
      collection: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps',
        },
      ],
      about: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/types/wordcamp',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/users/14070192',
        },
      ],
      'version-history': [
        {
          count: 7,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3134933/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 3135823,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3134933/revisions/3135823',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/media?parent=3134933',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 3131856,
    date: '2020-11-11T23:51:26',
    date_gmt: '2020-11-12T04:51:26',
    guid: {
      rendered: 'https://central.wordcamp.org/wordcamps/wordcamp-japan/',
    },
    modified: '2021-02-09T02:22:25',
    modified_gmt: '2021-02-09T07:22:25',
    slug: 'wordcamp-japan',
    status: 'wcpt-scheduled',
    type: 'wordcamp',
    link: 'https://central.wordcamp.org/wordcamps/wordcamp-japan/',
    title: {
      rendered: 'WordCamp Japan (Online)',
    },
    content: {
      rendered:
        '<p>Meet us online at the first nationwide WordCamp in Japan!</p>\n<p>It&#8217;s a week-long celebration of all things WordPress, with two days of sessions and five days of casual contributor hours. Pick the most convenient day(s) of the week for you and come learn WordPress with us. And say hi to the Japanese WordPress community!</p>\n',
      protected: false,
    },
    author: 14875848,
    featured_media: 0,
    template: '',
    'Start Date (YYYY-mm-dd)': '1624147200',
    'End Date (YYYY-mm-dd)': '1624665600',
    'Event Timezone': 'Asia/Tokyo',
    Location: 'Japan',
    URL: 'https://japan.wordcamp.org/2021/',
    Twitter: '@WordCampJapan',
    'WordCamp Hashtag': '',
    'Number of Anticipated Attendees': '500 - 800',
    'Organizer Name': 'Shusei Toda',
    'WordPress.org Username': 'st810amaze',
    'Virtual event only': '1',
    'Host region': 'Tokyo, Japan',
    'Venue Name': '',
    'Physical Address': '',
    'Maximum Capacity': '',
    'Available Rooms': '',
    'Website URL': '',
    'Exhibition Space Available': '',
    _venue_coordinates: '',
    _venue_city: '',
    _venue_state: '',
    _venue_country_code: '',
    _venue_country_name: '',
    _venue_zip: '',
    _host_coordinates: {
      latitude: 35.6761919,
      longitude: 139.6503106,
    },
    _host_city: '',
    _host_state: 'Tokyo',
    _host_country_code: 'JP',
    _host_country_name: 'Japan',
    _host_zip: '',
    session_start_time: 1624158000,
    _links: {
      self: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3131856',
        },
      ],
      collection: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps',
        },
      ],
      about: [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/types/wordcamp',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/users/14875848',
        },
      ],
      'version-history': [
        {
          count: 3,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3131856/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 3136128,
          href: 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps/3131856/revisions/3136128',
        },
      ],
      'wp:attachment': [
        {
          href: 'https://central.wordcamp.org/wp-json/wp/v2/media?parent=3131856',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
];
