
import { t } from '@superset-ui/core';
import { ControlPanelConfig, sections } from '@superset-ui/chart-controls';

const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['metric'],
        ['adhoc_filters'],
      ],
    },
    {
      label: t('Customize'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'shape',
            config: {
              type: 'SelectControl',
              label: t('Shape'),
              default: 'rect',
              choices: [
                // [value, label]
                ['circle', t('Circle')],
                ['diamond', t('Diamond')],
                ['triangle', t('Triangle')],
                ['pin', t('Pin')],
                ['rect', t('Rectangle')],
              ],
              renderTrigger: true,
              description: t('What shape does the chart have'),
            },
          },
        ],
      ],
    },
    {
      label: t('Customize'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'color',
            config: {
              type: 'SelectControl',
              label: t('Color'),
              default: 'blue',
              choices: [
                // [value, label]
                ['#0000FF', t('Blue')],
                ['#FF0000', t('Red')],
                ['#00FF00', t('Green')],
                ['#FFFF00', t('Yellow')],
                ['#FF00FF', t('Magenta')],
              ],
              renderTrigger: true,
              description: t('Customize the color of the chart elements'),
            },
          },
        ],
      ],
    },
  ],
};

export default config;
