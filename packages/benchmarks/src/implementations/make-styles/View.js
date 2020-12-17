import { makeStyles } from '@fluentui/make-styles';
import React from 'react';
import { renderer } from './renderer';

const useViewStyles = makeStyles([
  [
    null,
    {
      alignItems: 'stretch',
      borderWidth: 0,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexDirection: 'column',
      flexShrink: 0,
      margin: 0,
      padding: 0,
      position: 'relative',
      // fix flexbox bugs
      minHeight: 0,
      minWidth: 0
    }
  ]
]);

const staticViewStyles = [
  [
    null,
    null,
    {
      alignItems: [
        'a1q9h2pe',
        '.a1q9h2pe{-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}'
      ],
      boxSizing: ['a1ewtqcl', '.a1ewtqcl{box-sizing:border-box;}'],
      display: [
        'a22iagw',
        '.a22iagw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}'
      ],
      flexBasis: [
        'a1rmlqtg',
        '.a1rmlqtg{-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;}'
      ],
      flexDirection: [
        'a1vx9l62',
        '.a1vx9l62{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}'
      ],
      flexShrink: ['ai64zpg', '.ai64zpg{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}'],
      position: ['a10pi13n', '.a10pi13n{position:relative;}'],
      minHeight: ['aprs0cq', '.aprs0cq{min-height:0;}'],
      minWidth: ['ay77jfu', '.ay77jfu{min-width:0;}'],
      borderTopWidth: ['are7gi1', '.are7gi1{border-top-width:0;}'],
      borderRightWidth: [
        'a1358rze',
        '.a1358rze{border-right-width:0;}',
        '.ra1358rze{border-left-width:0;}'
      ],
      borderBottomWidth: ['aqdk4by', '.aqdk4by{border-bottom-width:0;}'],
      borderLeftWidth: [
        'a1rvrf73',
        '.a1rvrf73{border-left-width:0;}',
        '.ra1rvrf73{border-right-width:0;}'
      ],
      borderTopStyle: ['azkkow9', '.azkkow9{border-top-style:solid;}'],
      borderRightStyle: [
        'acdblym',
        '.acdblym{border-right-style:solid;}',
        '.racdblym{border-left-style:solid;}'
      ],
      borderBottomStyle: ['ag706s2', '.ag706s2{border-bottom-style:solid;}'],
      borderLeftStyle: [
        'ajik90z',
        '.ajik90z{border-left-style:solid;}',
        '.rajik90z{border-right-style:solid;}'
      ],
      marginTop: ['a1hu3pq6', '.a1hu3pq6{margin-top:0;}'],
      marginRight: ['a11qmguv', '.a11qmguv{margin-right:0;}', '.ra11qmguv{margin-left:0;}'],
      marginBottom: ['a19f4twv', '.a19f4twv{margin-bottom:0;}'],
      marginLeft: ['a1tyq0we', '.a1tyq0we{margin-left:0;}', '.ra1tyq0we{margin-right:0;}'],
      paddingTop: ['a1g0x7ka', '.a1g0x7ka{padding-top:0;}'],
      paddingRight: ['ahxju0i', '.ahxju0i{padding-right:0;}', '.rahxju0i{padding-left:0;}'],
      paddingBottom: ['a1qch9an', '.a1qch9an{padding-bottom:0;}'],
      paddingLeft: ['a1cnd47f', '.a1cnd47f{padding-left:0;}', '.ra1cnd47f{padding-right:0;}']
    }
  ]
];
staticViewStyles.mapping = {};

const useStaticViewStyles = makeStyles(staticViewStyles);

function View(props) {
  const { className, ...other } = props;
  const classes = useStaticViewStyles({}, { renderer }, className);

  return <div {...other} className={classes} />;
}

export default View;
