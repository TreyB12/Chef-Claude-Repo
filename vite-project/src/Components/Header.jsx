import { version } from 'react'
import chefClaudeLogo from "/src/assets/chef-icon.png"

export default function Header () {
    return (
        <>
        <header className="header">
            <img src={chefClaudeLogo} alt="chef claude logo" />
            <h1>Chef Claude</h1> <small>{version}</small>
        </header>
        
        </>


    )
}