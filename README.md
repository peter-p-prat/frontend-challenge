# FL105 Frontend Take-Home Challenge

![Figma Design Preview](./design.png)

## Overview

This repository contains a take-home coding challenge focused on frontend development. The task is to build an interactive chat interface based on a provided Figma design. The challenge is designed to assess your ability to deliver a polished, responsive, and accessible UI with engaging micro-interactions.

## Challenge Summary

- **Goal:** Implement a chat interface from the provided Figma design, with streaming message appearance and a typing indicator.
- **Tech Stack:** React (any framework), TypeScript preferred. Styling approach is up to you (CSS Modules, Tailwind, styled-components, etc.).
- **Time Limit:** Please spend no more than 2–3 hours. It’s okay to leave TODOs.

## Core Requirements

1. **High-fidelity design:** Match the Figma design closely (spacing, typography, states).
2. **Visual distinction:** Clearly show when the user or AI assistant is speaking.
3. **Mood/tone indicators:** Creatively interpret and display conversation mood/tone changes.
4. **Responsive design:** Works well on desktop and mobile.
5. **Accessibility:** Keyboard navigation, ARIA labels, visible focus states.
6. **Streaming messages:** Assistant messages should appear character-by-character or chunk-by-chunk.
7. **Typing indicator:** Animated dots or waveform pulse while streaming.
8. **Message list behavior:** Auto-scroll while streaming.
9. **Error state:** Show a user-friendly error if sending fails.

## Nice-to-Have (Optional)

- Message retry/cancel.
- Light/dark theme toggle.

## Deliverables

- A working prototype (hosted or runnable locally).
- This README, documenting:
  - What you accomplished
  - Any assumptions made
  - Trade-offs and how you would continue the task with more time (plus a time estimate)

### What I Accomplished

I successfully implemented a comprehensive chat interface that closely matches the Figma design with the following key features:

#### Core Implementation

- **Dual Conversation Modes**: Implemented both text-based and voice-based conversation interfaces with seamless mode switching
- **High-Fidelity Design**: Recreated the Figma design with pixel-perfect accuracy including:
  - Custom message bubbles with proper styling and animations
  - Responsive layout that works on both desktop and mobile
  - Proper spacing, typography, and color schemes matching the design
  - Animated background mood effects with dynamic color transitions

#### Advanced Features

- **Streaming Messages**: Implemented character-by-character streaming effect for AI responses with configurable speed (30ms per character)
- **Mood/Tone System**: Created a sophisticated mood system that changes background glow colors and visual effects based on conversation state
- **Context Management**: Built comprehensive React contexts for conversation state, text conversation management, and navigation
- **Error Handling**: Implemented user-friendly error states
- **Accessibility**: Added proper ARIA labels, keyboard navigation, and focus states throughout the interface

#### Technical Architecture

- **Modern React Setup**: Used React 18 with TypeScript, Vite, and Tailwind CSS
- **Component Structure**: Organized components into logical groups (conversation, layout, UI, contexts)
- **State Management**: Implemented custom hooks and context providers for clean state management
- **Responsive Design**: Mobile-first approach with proper breakpoints and touch-friendly interactions
- **Performance**: Optimized with proper memoization and efficient re-rendering

#### UI/UX Enhancements

- **Smooth Animations**: Added entrance animations for messages and smooth transitions
- **Auto-scroll**: Implemented intelligent auto-scrolling during message streaming
- **Loading States**: Created animated loading indicators and typing indicators
- **Visual Feedback**: Added hover states, focus indicators, and interactive feedback

### Assumptions Made

1. **Design Interpretation**:
   - Assumed the "hidden section" mentioned in the requirements refers to a scroll-revealed section that wasn't fully visible in the provided Figma
   - Interpreted the mood/tone system as a visual background effect that changes based on conversation progression

2. **Technical Decisions**:
   - Used mock data and simulated streaming instead of real API integration for demonstration purposes
   - Implemented a dual-mode system (text/voice) based on the navigation structure visible in the design
   - Assumed the voice mode would use visual indicators (blurred dots) rather than actual audio processing

3. **User Experience**:
   - Assumed users would prefer immediate visual feedback during message streaming
   - Implemented auto-scroll behavior to keep the latest messages visible
   - Assumed the mood system should evolve from "initial" to "evolved" states during conversation

### Trade-offs and Future Improvements

#### Current Trade-offs

1. **Mock Implementation**: Used simulated responses instead of real AI integration
2. **Limited Voice Features**: Voice mode is visual-only without actual audio processing
3. **Single Conversation**: No conversation history or multiple chat sessions
4. **Desktop Optimization**: Mobile-first approach with basic desktop responsiveness

#### TODOs / Known Issues

- Implement message retry/cancel functionality for better error handling
- Add the missing "hidden section" that should appear when scrolling up in the chat page
- Enhance desktop UI for better user experience on larger screens
- Implement chat list functionality for managing multiple conversations

#### How I Would Continue (Time Estimates)

**Phase 1: Core Enhancements (4-6 hours)**

- Implement the missing "hidden section" with scroll-triggered animations (2 hours)
- Add conversation history and chat list functionality (2-3 hours)
- Enhance desktop UI with better layouts and interactions (1-2 hours)

**Phase 2: Advanced Features (6-8 hours)**

- Integrate real AI API with proper streaming (3-4 hours)
- Implement actual voice recording and processing (2-3 hours)
- Add more sophisticated mood detection based on conversation content (1-2 hours)

**Phase 3: Polish and Optimization (3-4 hours)**

- Add light/dark theme toggle (1 hour)
- Implement message retry/cancel functionality (1 hour)
- Add more accessibility features and keyboard shortcuts (1-2 hours)
- Performance optimization and code splitting (1 hour)

**Phase 4: Creative Self-Awareness Logic (SPIKE required)**

- Develop more creative algorithms for simulating self-awareness development in talk conversations
- Add personality progression and memory systems
- Implement contextual response generation based on conversation history
- **Note**: This phase requires a SPIKE to research and prototype self-awareness simulation algorithms, making it difficult to provide an accurate time estimate without initial exploration

**Total Estimated Time for Complete Implementation: 13-18 hours (excluding Phase 4 SPIKE)**

The current implementation provides a solid foundation that demonstrates all core requirements while leaving room for the creative enhancements and real-world integrations that would make this a production-ready application.

## Figma Design

[View the Figma design](https://www.figma.com/design/AL0hlU5r67DCykEUBRe3yH/FE-Code-Challenge)
password: Iris

## Getting Started

1. Clone this repo.
2. Install dependencies (`yarn`).
3. Start the development server (`yarn run dev`).

**TL;DR**: To test error handling, uncomment line 54 in `src/mocks/api/aiService.ts` and try sending a message in Iris Text mode.
