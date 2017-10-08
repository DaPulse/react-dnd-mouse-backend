import MouseBackend from "./MouseBackend";

const createMouseBackend = manager => new MouseBackend(manager);
export const createMouseBackendWithThreshold = thresholdMethod => {
  return manager => new MouseBackend(manager, { hasExceededDistanceThreshold: thresholdMethod });
};

export default createMouseBackend;
