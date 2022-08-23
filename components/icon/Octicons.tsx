
import { Octicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { AppThemeContext } from '../../hooks/useColorScheme';

export const BaseOcticons = styled(Octicons)`
    color: ${(props: AppThemeContext) => props.theme.color.altText};
`
export const CloseIcon = styled(Octicons)`
    display: flex;
    color: ${(props: AppThemeContext) => props.theme.color.altText};
`