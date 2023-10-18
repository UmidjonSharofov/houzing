import discord from '../../assets/icon/why/discord.svg'
import house from '../../assets/icon/why/house 1.svg'
import calculator from '../../assets/icon/why/calculator.svg'
import maps from '../../assets/icon/why/maps.svg'
export const Why = () => {
    return (
        <div className="Why">
            <div className="Why_title">
                <h3 className="title">Why Choose Us?</h3>
                <p className="sub_Title">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            </div>
            <div className="Wrapper">
                    <div className='why_container'>
                        <div className='Why_wrapper'>
                            <img src={discord} alt="discord" />
                            <div className='Choose_title'>
                                <h3>Trusted By Thousands</h3>
                                <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                            </div>
                        </div>
                        <div className='Why_wrapper'>
                            <img src={house} alt="house" />
                            <div className='Choose_title'>
                                <h3>Wide Renge Of Properties</h3>
                                <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                            </div>
                        </div>
                        <div className='Why_wrapper'>
                            <img src={calculator} alt="calculator" />
                            <div className='Choose_title'>
                                <h3>Financing Made Easy</h3>
                                <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                            </div>
                        </div>
                        <div className='Why_wrapper'>
                            <img src={maps} alt="maps" />
                            <div className='Choose_title'>
                                <h3>See Neighborhoods</h3>
                                <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Why
