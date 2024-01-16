import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from '../images/thumbnail.png';
import example1 from '../images/example1.png';
import example2 from '../images/example2.png';
import example3 from '../images/example3.png';
import example4 from '../images/example4.png';

export default class LiquidChartPlugin extends ChartPlugin {
  constructor() {
    const metadata = new ChartMetadata({
      description: 'A plugin to visualize a percentage metric between 0 % and 100 %',
      name: t('Liquid'),
      thumbnail,
      exampleGallery: [
        { url: example1, caption: t('Circle') },
        { url: example2, caption: t('Diamond') },
        { url: example3, caption: t('Pin') },
        { url: example4, caption: t('Triangle') },
      ]
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('../Liquid'),
      metadata,
      transformProps,
    });
  }
}
