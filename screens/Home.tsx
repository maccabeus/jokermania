
import LazyCategoryList from '../components/list/CategoryList';
import BodyWrapper from '../components/wrapper/BodyWrapper';
import ScreenWrapper from '../components/wrapper/ScreenWrapper';
import HeaderBar from '../components/wrapper/HeaderBar';

export default function HomeScreen() {
    return (
        <ScreenWrapper>
            <HeaderBar>
            </HeaderBar>
            <BodyWrapper>
                <LazyCategoryList />
            </BodyWrapper>
        </ScreenWrapper>
    )
}