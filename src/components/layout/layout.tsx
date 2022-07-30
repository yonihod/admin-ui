import Sidebar from '../sidebar/Sidebar';

interface Props {
    children: React.ReactNode;
  }
  

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className='layout'>
            <Sidebar />
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default Layout;
