import App from '../../../components/App/App';

export default function FinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <App>{children}</App>;
}
