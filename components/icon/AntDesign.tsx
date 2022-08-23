
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { AppThemeContext } from '../../hooks/useColorScheme';

export const BaseAntIcon = styled(AntDesign)`
    display: flex;
    color: ${(props: AppThemeContext) => props.theme.color.altText};
`