/** @format */

// NOTE water/use
import type { AppRouteModule } from '@@utils/use/routers/types';
import { LAYOUT_DEF, LAYOUT_BOX } from '@@utils/use/routers/constant';

const test3Page: AppRouteModule = {
  path: '/test3',
  name: 'Test3',
  component: LAYOUT_DEF,
  children: [
    {
      path: '',
      name: 'Test3',
      children: [
        {
          path: '',
          name: 'Test3View',
          meta: {
            title: '测试3',
          },
          component: () => import('@@views/Test.vue'),
        },
      ],
      component: LAYOUT_BOX,
    },
  ],
};

export default test3Page;