import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import {startMock} from "@mocks/index"
expect.extend(matchers)
startMock();