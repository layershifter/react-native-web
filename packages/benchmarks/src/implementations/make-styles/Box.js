import { makeStyles } from '@fluentui/make-styles';
import React from 'react';

import View from './View';
import { renderer } from './renderer';

const useBoxStyles = makeStyles([
  [{ outer: true }, { alignSelf: 'flex-start', padding: '4px' }],
  [{ row: true }, { flexDirection: 'row' }],

  [{ color0: true }, { backgroundColor: '#14171A' }],
  [{ color1: true }, { backgroundColor: '#AAB8C2' }],
  [{ color2: true }, { backgroundColor: '#E6ECF0' }],
  [{ color3: true }, { backgroundColor: '#FFAD1F' }],
  [{ color4: true }, { backgroundColor: '#F45D22' }],
  [{ color5: true }, { backgroundColor: '#E0245E' }],

  [{ fixed: true }, { width: '6px', height: '6px' }]
]);

const staticBoxStyles = [
  [
    p => p.outer,
    null,
    {
      alignSelf: [
        'ajgzulp',
        '.ajgzulp{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}'
      ],
      paddingTop: ['a10ra9hq', '.a10ra9hq{padding-top:4px;}'],
      paddingRight: ['a8wuabp', '.a8wuabp{padding-right:4px;}', '.ra8wuabp{padding-left:4px;}'],
      paddingBottom: ['a1y2xyjm', '.a1y2xyjm{padding-bottom:4px;}'],
      paddingLeft: ['aycuoez', '.aycuoez{padding-left:4px;}', '.raycuoez{padding-right:4px;}']
    }
  ],
  [
    p => p.row,
    null,
    {
      flexDirection: [
        'a1063pyq',
        '.a1063pyq{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}'
      ]
    }
  ],
  [
    p => p.color == 0,
    null,
    { backgroundColor: ['a1gi06js', '.a1gi06js{background-color:#14171A;}'] }
  ],
  [
    p => p.color == 1,
    null,
    { backgroundColor: ['a1wndmql', '.a1wndmql{background-color:#AAB8C2;}'] }
  ],
  [
    p => p.color == 2,
    null,
    { backgroundColor: ['afbku4w', '.afbku4w{background-color:#E6ECF0;}'] }
  ],
  [
    p => p.color == 3,
    null,
    { backgroundColor: ['avif04f', '.avif04f{background-color:#FFAD1F;}'] }
  ],
  [
    p => p.color == 4,
    null,
    { backgroundColor: ['a1vmrinc', '.a1vmrinc{background-color:#F45D22;}'] }
  ],
  [
    p => p.color == 5,
    null,
    { backgroundColor: ['a1dqn7v7', '.a1dqn7v7{background-color:#E0245E;}'] }
  ],
  [
    p => p.fixed,
    null,
    { width: ['a16dn6v3', '.a16dn6v3{width:6px;}'], height: ['a3mu39s', '.a3mu39s{height:6px;}'] }
  ]
];

const useStaticBoxStyles = makeStyles(staticBoxStyles);

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => {
  const classes = useStaticBoxStyles(
    {
      color,
      fixed,
      outer,
      row: layout === 'row'
    },
    { renderer }
  );

  return <View className={classes} {...other} />;
};

export default Box;
