import logo from '../assets/Untitled-2.png'

const Navbar = ({ web3Handler, account }) => {
    return (
        <nav className="flex-between">
            <a
                className='flex'
                href="http://Google.com" // for example 
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={logo} className="App-logo" alt="logo" />
                Dapp Metavers me
            </a>

            {account ? (
                <a
                    href={`${""}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <button onClick={web3Handler} className="button">Connect Wallet</button>
            )}
        </nav>
    )
}

export default Navbar;
