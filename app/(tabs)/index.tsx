import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { Collapsible } from '@/components/ui/collapsible';
import { Colors } from '@/constants/theme';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const theme  = useTheme();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedText style={{ fontSize: 32, fontWeight: 'bold', height: 40 }}>React Native Playground</ThemedText>

        <ThemedText style={{ fontSize: 28, fontWeight: 'bold', color: Colors.light.tint }}>Hooks</ThemedText>

        <Collapsible title="useState">
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise01'>Exercice 1</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise02'>Exercice 2</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise03'>Exercice 3</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise04'>Exercice 4</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise05'>Exercice 5</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise06'>Exercice 6</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise07'>Exercice 7</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise08'>Exercice 8</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise09'>Exercice 9</Link>
          <Link style={{ color: theme.colors.text }} href='/usestate/exercise10'>Exercice 10</Link>
        </Collapsible>

        <Collapsible title="useReducer">
          <Link style={{ color: theme.colors.text }} href='/usereducer/exercise01'>Exercice 1</Link>
          <Link style={{ color: theme.colors.text }} href='/usereducer/exercise02'>Exercice 2</Link>
          <Link style={{ color: theme.colors.text }} href='/usereducer/exercise03'>Exercice 3</Link>
          <Link style={{ color: theme.colors.text }} href='/usereducer/exercise04'>Exercice 4</Link>
        </Collapsible>

        <Collapsible title="useContext">
          <Link style={{ color: theme.colors.text }} href='/usecontext/exercise01'>Exercice 1</Link>
          <Link style={{ color: theme.colors.text }} href='/usecontext/exercise02'>Exercice 2</Link>
          <Link style={{ color: theme.colors.text }} href='/usecontext/exercise03'>Exercice 3</Link>
          <Link style={{ color: theme.colors.text }} href='/usecontext/exercise04'>Exercice 4</Link>
          <Link style={{ color: theme.colors.text }} href='/usecontext/exercise05'>Exercice 5</Link>
        </Collapsible>

        <Collapsible title="useRef">
          <Link style={{ color: theme.colors.text }} href='/useref/exercise01'>Exercice 1</Link>
          <Link style={{ color: theme.colors.text }} href='/useref/exercise02'>Exercice 2</Link>
          <Link style={{ color: theme.colors.text }} href='/useref/exercise03'>Exercice 3</Link>
          <Link style={{ color: theme.colors.text }} href='/useref/exercise04'>Exercice 4</Link>
          <Link style={{ color: theme.colors.text }} href='/useref/exercise05'>Exercice 5</Link>
          <Link style={{ color: theme.colors.text }} href='/useref/exercise06'>Exercice 6</Link>
          <Link style={{ color: theme.colors.text }} href='/useref/exercise07'>Exercice 7</Link>
        </Collapsible>

        <Collapsible title="useImperativeHandle">
        </Collapsible>

        <Collapsible title="useEffect">
        </Collapsible>

        <Collapsible title="useLayoutEffect">
        </Collapsible>

        <Collapsible title="useEffectEvent">
        </Collapsible>

        <Collapsible title="useMemo">
        </Collapsible>

        <Collapsible title="useCallback">
        </Collapsible>

        <Collapsible title="useTransition">
        </Collapsible>

        <Collapsible title="useDeferredValue">
        </Collapsible>

        <Collapsible title="useDebugValue">
        </Collapsible>

        <Collapsible title="useId">
        </Collapsible>

        <Collapsible title="useSyncExternalStore">
        </Collapsible>

        <Collapsible title="useActionState">
        </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
