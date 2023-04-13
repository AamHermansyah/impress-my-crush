import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import { AnimatePresence } from 'framer-motion';
import Dashboard from './components/Dashboard';
import ReplaceImageGame from './components/PuzzleImageReplace/Layout';
import GuessImageGame from './components/PuzzleImageMemory/Layout';
import SlidingImageGame from './components/PuzzleSlidingImage/Layout';
import CrossWordsGame from './components/TTS/Layout';
import Gallery from './components/Gallery';
import LoveLetters from './components/LoveLetters';
import GuardRoute from './components/GuardRoute';

export default function AppWrapper() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Scene1 />} />
          <Route path="/guess-somebody" element={<Scene2 />} />
          <Route path="/dashboard" element={
            <GuardRoute>
              <Dashboard />
            </GuardRoute>
          } />
          <Route path="/replace-image" element={
            <GuardRoute>
              <ReplaceImageGame />
            </GuardRoute>
          } />
          <Route path="/guess-image" element={
            <GuardRoute>
              <GuessImageGame />
            </GuardRoute>
          } />
          <Route path="/sliding-image" element={
            <GuardRoute>
              <SlidingImageGame />
            </GuardRoute>
          } />
          <Route path="/cross-words" element={
            <GuardRoute>
              <CrossWordsGame />
            </GuardRoute>
          } />
          <Route path="/gallery" element={
            <GuardRoute>
              <Gallery />
            </GuardRoute>
          } />
          <Route path="/love-letters" element={
            <GuardRoute>
              <LoveLetters />
            </GuardRoute>
          } />
          <Route path="*" element={<Scene1 />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
