module.exports = {
  'extends': [
    'stylelint-config-standard',
  ],
  'plugins': [
    'stylelint-order',
    'stylelint-scss',
  ],
  'rules': {
    'unit-no-unknown': [
      true,
      {
        'ignoreUnits': ['rpx'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        'ignoreTypes': [
          '/page/',
        ],
      },
    ],
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-order': [
      'box-sizing',
      'position',
      'font-size',
      'color',
      'width',
      'height',
      'background',
    ],
    'rule-empty-line-before': [
      'always-multi-line',
    ],
    'declaration-empty-line-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
  },
}