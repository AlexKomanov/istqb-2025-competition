var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// tests/artillery-loox.ts
var artillery_loox_exports = {};
__export(artillery_loox_exports, {
  config: () => config,
  scenarios: () => scenarios
});
module.exports = __toCommonJS(artillery_loox_exports);
var config = {
  // You can set the base URL here
  target: "https://istqb15-1-qa4.myshopify.com",
  engines: {
    playwright: {
      launchOptions: {
        headless: true
      },
      // Your trace config
      trace: {
        enabled: true,
        maxConcurrentRecordings: 3
      }
    }
  },
  // --- IMPORTANT ---
  // Without a 'phases' block, this test will only run ONCE.
  // Add this block to run a real load test.
  phases: [
    {
      duration: 60,
      // Test duration of 60 seconds
      rampTo: 10,
      // Ramp from 1 up to 10 concurrent users
      name: "Ramp up to many users"
      // Start 10 new virtual users every second
    }
  ]
};
var scenarios = [{
  engine: "playwright",
  testFunction: visitProductPage
}];
async function visitProductPage(page) {
  await page.goto(
    "https://istqb15-1-qa4.myshopify.com/products/the-3p-fulfilled-snowboard"
  );
  await page.fill('[id="password"]', "1");
  await page.click('button[type="submit"]');
  await page.waitForSelector(".header__active-menu-item");
  await page.goto(
    "https://istqb15-1-qa4.myshopify.com/products/the-3p-fulfilled-snowboard"
  );
  await page.waitForSelector(".product-form__buttons");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config,
  scenarios
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vYXJ0aWxsZXJ5LWxvb3gudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHR5cGUgQ29uZmlnLCB0eXBlIFNjZW5hcmlvIH0gZnJvbSAnYXJ0aWxsZXJ5JztcbmltcG9ydCB7IHR5cGUgUGFnZSwgZXhwZWN0IH0gZnJvbSAnQHBsYXl3cmlnaHQvdGVzdCc7IC8vIEltcG9ydCBQYWdlIGFuZCBleHBlY3RcblxuLyoqXG4gKiAxLiBDb25maWd1cmUgdGhlIFRlc3RcbiAqIFdlIHNldCB0aGUgYmFzZSBVUkwgYW5kIFBsYXl3cmlnaHQgZW5naW5lIG9wdGlvbnMgaGVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICAvLyBZb3UgY2FuIHNldCB0aGUgYmFzZSBVUkwgaGVyZVxuICB0YXJnZXQ6ICdodHRwczovL2lzdHFiMTUtMS1xYTQubXlzaG9waWZ5LmNvbScsXG4gIGVuZ2luZXM6IHtcbiAgICBwbGF5d3JpZ2h0OiB7XG4gICAgbGF1bmNoT3B0aW9uczoge1xuICAgICAgICBoZWFkbGVzczogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIFlvdXIgdHJhY2UgY29uZmlnXG4gICAgICB0cmFjZToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBtYXhDb25jdXJyZW50UmVjb3JkaW5nczogM1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXG4gIC8vIC0tLSBJTVBPUlRBTlQgLS0tXG4gIC8vIFdpdGhvdXQgYSAncGhhc2VzJyBibG9jaywgdGhpcyB0ZXN0IHdpbGwgb25seSBydW4gT05DRS5cbiAgLy8gQWRkIHRoaXMgYmxvY2sgdG8gcnVuIGEgcmVhbCBsb2FkIHRlc3QuXG4gIHBoYXNlczogW1xuICAgIHtcbiAgICAgIGR1cmF0aW9uOiA2MCwgICAgICAgLy8gVGVzdCBkdXJhdGlvbiBvZiA2MCBzZWNvbmRzXG4gICAgICByYW1wVG86IDEwLCAgICAgICAgIC8vIFJhbXAgZnJvbSAxIHVwIHRvIDEwIGNvbmN1cnJlbnQgdXNlcnNcbiAgICAgIG5hbWU6IFwiUmFtcCB1cCB0byBtYW55IHVzZXJzXCIgICAgIC8vIFN0YXJ0IDEwIG5ldyB2aXJ0dWFsIHVzZXJzIGV2ZXJ5IHNlY29uZFxuICAgIH1cbiAgXVxufTtcblxuLyoqXG4gKiAyLiBEZWZpbmUgdGhlIFNjZW5hcmlvc1xuICogVGhpcyB0ZWxscyBBcnRpbGxlcnkgdG8gdXNlIHRoZSAncGxheXdyaWdodCcgZW5naW5lXG4gKiBhbmQgcnVuIHRoZSAndmlzaXRQcm9kdWN0UGFnZScgZnVuY3Rpb24gZm9yIGVhY2ggdmlydHVhbCB1c2VyLlxuICovXG5leHBvcnQgY29uc3Qgc2NlbmFyaW9zOiBTY2VuYXJpb1tdID0gW3tcbiAgZW5naW5lOiAncGxheXdyaWdodCcsXG4gIHRlc3RGdW5jdGlvbjogdmlzaXRQcm9kdWN0UGFnZVxufV07XG5cbi8qKlxuICogMy4gRGVmaW5lIHRoZSBQbGF5d3JpZ2h0IFRlc3QgRnVuY3Rpb25cbiAqIFRoaXMgaXMgdGhlIGFjdHVhbCBicm93c2VyIGF1dG9tYXRpb24gbG9naWMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZpc2l0UHJvZHVjdFBhZ2UocGFnZTogUGFnZSkge1xuICAvLyAxLiBHbyB0byB0aGUgc3BlY2lmaWMgcHJvZHVjdCBwYWdlXG4gIGF3YWl0IHBhZ2UuZ290byhcbiAgICBcImh0dHBzOi8vaXN0cWIxNS0xLXFhNC5teXNob3BpZnkuY29tL3Byb2R1Y3RzL3RoZS0zcC1mdWxmaWxsZWQtc25vd2JvYXJkXCJcbiAgKTtcblxuICBhd2FpdCBwYWdlLmZpbGwoJ1tpZD1cInBhc3N3b3JkXCJdJywgJzEnKTtcbiAgYXdhaXQgcGFnZS5jbGljaygnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcblxuICBhd2FpdCBwYWdlLndhaXRGb3JTZWxlY3RvcignLmhlYWRlcl9fYWN0aXZlLW1lbnUtaXRlbScpO1xuXG4gIGF3YWl0IHBhZ2UuZ290byhcbiAgICBcImh0dHBzOi8vaXN0cWIxNS0xLXFhNC5teXNob3BpZnkuY29tL3Byb2R1Y3RzL3RoZS0zcC1mdWxmaWxsZWQtc25vd2JvYXJkXCJcbiAgKTtcblxuICAvLyAyLiBDbGljayB0aGUgXCJCdXkgaXQgbm93XCIgYnV0dG9uXG4gIGF3YWl0IHBhZ2Uud2FpdEZvclNlbGVjdG9yKCcucHJvZHVjdC1mb3JtX19idXR0b25zJyk7XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9PLElBQU0sU0FBaUI7QUFBQTtBQUFBLEVBRTVCLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxRQUNYLFVBQVU7QUFBQSxNQUNaO0FBQUE7QUFBQSxNQUVBLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxRQUNULHlCQUF5QjtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxVQUFVO0FBQUE7QUFBQSxNQUNWLFFBQVE7QUFBQTtBQUFBLE1BQ1IsTUFBTTtBQUFBO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjtBQU9PLElBQU0sWUFBd0IsQ0FBQztBQUFBLEVBQ3BDLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFDaEIsQ0FBQztBQU1ELGVBQWUsaUJBQWlCLE1BQVk7QUFFMUMsUUFBTSxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFFQSxRQUFNLEtBQUssS0FBSyxtQkFBbUIsR0FBRztBQUN0QyxRQUFNLEtBQUssTUFBTSx1QkFBdUI7QUFFeEMsUUFBTSxLQUFLLGdCQUFnQiwyQkFBMkI7QUFFdEQsUUFBTSxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFHQSxRQUFNLEtBQUssZ0JBQWdCLHdCQUF3QjtBQUNyRDsiLAogICJuYW1lcyI6IFtdCn0K
