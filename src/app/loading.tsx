import SuspenseLoading from '~/components/SuspenseLoading';

export interface IAppLoadingProps {}

export default function AppLoading(props: IAppLoadingProps) {
  return <SuspenseLoading />;
}
