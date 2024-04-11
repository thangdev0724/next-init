import { dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '~/configs/query-client';
import { HydrateQuery } from '~/configs/react-query';
import Home from '~/features/Home';
import { delay } from '~/utils';

/**
 * @page
 * @description Màn hình trang chủ
 * @author thangld
 */
export default async function HomePage(props: any) {
  const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(GET_LOGINDATA_KEY, getLoginData);
  // await delay(1000);

  console.log('home props: ', props);

  return (
    <HydrateQuery state={dehydrate(queryClient)}>
      <Home />
    </HydrateQuery>
  );
}
