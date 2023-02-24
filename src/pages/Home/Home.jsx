import {
    HomeSection,
    HomePageTitle,
    HomePageText,
    HomePageLink,
} from './Home.styled';

const HomePage = () => {
    return (
        <HomeSection>
            <HomePageTitle>Wellcome! Save your contacts to Phonebook!</HomePageTitle>
            <HomePageText>Don't hesitate -
                <HomePageLink to={'/register'}> register!</HomePageLink>
            </HomePageText>
            <HomePageText>Your contacts wait for you -
                <HomePageLink to={'/login'}> log in!</HomePageLink>
            </HomePageText>
        </HomeSection>
    )
}

export default HomePage;