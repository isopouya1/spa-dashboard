const Dashboard = () => {
  return ` <span class="flex items-center gap-1 font-medium dark:text-white">
            Today
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z"
                fill="#1C1C1C"
                fill-opacity="0.4"
              />
            </svg>
          </span>
          <section class="grid grid-cols-4 gap-9 mt-5">
            <div class="info-box bg-light-blue">
              <span class="font-medium text-lg">Views</span>
              <h1
                class="text-3xl font-medium flex items-center justify-between"
              >
                721K<span class="text-base flex items-center gap-2"
                  >+11.01%<svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.95488 1.60777L12.5 0L11.1198 5.6061L9.39804 3.9532L6.62069 6.84627C6.52641 6.94448 6.39615 7 6.26 7C6.12385 7 5.99359 6.94448 5.89931 6.84627L3.86 4.72199L0.860694 7.84627C0.669457 8.04547 0.35294 8.05193 0.153735 7.86069C-0.0454709 7.66946 -0.0519304 7.35294 0.139307 7.15373L3.49931 3.65373C3.59359 3.55552 3.72385 3.5 3.86 3.5C3.99615 3.5 4.12641 3.55552 4.22069 3.65373L6.26 5.77801L8.67665 3.26067L6.95488 1.60777Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <div class="info-box bg-light-purple">
              <span class="font-medium text-lg">Visits</span>
              <h1
                class="text-3xl font-medium flex items-center justify-between"
              >
                367K<span class="text-base flex items-center gap-2"
                  >+0.03%<svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.95488 1.60777L12.5 0L11.1198 5.6061L9.39804 3.9532L6.62069 6.84627C6.52641 6.94448 6.39615 7 6.26 7C6.12385 7 5.99359 6.94448 5.89931 6.84627L3.86 4.72199L0.860694 7.84627C0.669457 8.04547 0.35294 8.05193 0.153735 7.86069C-0.0454709 7.66946 -0.0519304 7.35294 0.139307 7.15373L3.49931 3.65373C3.59359 3.55552 3.72385 3.5 3.86 3.5C3.99615 3.5 4.12641 3.55552 4.22069 3.65373L6.26 5.77801L8.67665 3.26067L6.95488 1.60777Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <div class="info-box bg-light-blue">
              <span class="font-medium text-lg">New Users</span>
              <h1
                class="text-3xl font-medium flex items-center justify-between"
              >
                1,156<span class="text-base flex items-center gap-2"
                  >+15.03%<svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.95488 1.60777L12.5 0L11.1198 5.6061L9.39804 3.9532L6.62069 6.84627C6.52641 6.94448 6.39615 7 6.26 7C6.12385 7 5.99359 6.94448 5.89931 6.84627L3.86 4.72199L0.860694 7.84627C0.669457 8.04547 0.35294 8.05193 0.153735 7.86069C-0.0454709 7.66946 -0.0519304 7.35294 0.139307 7.15373L3.49931 3.65373C3.59359 3.55552 3.72385 3.5 3.86 3.5C3.99615 3.5 4.12641 3.55552 4.22069 3.65373L6.26 5.77801L8.67665 3.26067L6.95488 1.60777Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <div class="info-box bg-light-purple">
              <span class="font-medium text-lg">Active Users</span>
              <h1
                class="text-3xl font-medium flex items-center justify-between"
              >
                239K<span class="text-base flex items-center gap-2"
                  >+6.08%<svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.95488 1.60777L12.5 0L11.1198 5.6061L9.39804 3.9532L6.62069 6.84627C6.52641 6.94448 6.39615 7 6.26 7C6.12385 7 5.99359 6.94448 5.89931 6.84627L3.86 4.72199L0.860694 7.84627C0.669457 8.04547 0.35294 8.05193 0.153735 7.86069C-0.0454709 7.66946 -0.0519304 7.35294 0.139307 7.15373L3.49931 3.65373C3.59359 3.55552 3.72385 3.5 3.86 3.5C3.99615 3.5 4.12641 3.55552 4.22069 3.65373L6.26 5.77801L8.67665 3.26067L6.95488 1.60777Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <div class="col-span-3 dark:bg-neutral-800 p-3 rounded-3xl">
              <canvas id="myChart"></canvas>
            </div>
            <div class="dark:bg-neutral-800 p-3 rounded-3xl">
              <canvas id="bar-chart-horizontal" height="500px"></canvas>
            </div>
            <div
              class="col-span-3 grid grid-cols-4 bg-light dark:bg-neutral-800 rounded-3xl py-8 px-10"
            >
              <h1 class="col-span-4 text-2xl font-semibold dark:text-white">
                Top Selling Products
              </h1>
              <h1 class="font-medium text-light-gray dark:text-white/20">
                Name
              </h1>
              <h1 class="font-medium text-light-gray dark:text-white/20">
                Price
              </h1>
              <h1 class="font-medium text-light-gray dark:text-white/20">
                Quantity
              </h1>
              <h1 class="font-medium text-light-gray dark:text-white/20">
                Amount
              </h1>
              <div
                class="col-span-4 h-0.5 bg-light-gray/50 rounded-full dark:bg-white/20"
              ></div>
              <h1 class="font-medium text-black dark:text-white">
                ASOS Ridley High Waist
              </h1>
              <h1 class="font-medium text-black dark:text-white">$79.49</h1>
              <h1 class="font-medium text-black dark:text-white">82</h1>
              <h1 class="font-medium text-black dark:text-white">$6,518.18</h1>
              <h1 class="font-medium text-black dark:text-white">
                Marco Lightweight Shirt
              </h1>
              <h1 class="font-medium text-black dark:text-white">$128.50</h1>
              <h1 class="font-medium text-black dark:text-white">37</h1>
              <h1 class="font-medium text-black dark:text-white">$4,754.50</h1>
              <h1 class="font-medium text-black dark:text-white">
                Half Sleeve Shirt
              </h1>
              <h1 class="font-medium text-black dark:text-white">$39.99</h1>
              <h1 class="font-medium text-black dark:text-white">64</h1>
              <h1 class="font-medium text-black dark:text-white">$2,559.36</h1>
              <h1 class="font-medium text-black dark:text-white">
                Lightweight Jacket
              </h1>
              <h1 class="font-medium text-black dark:text-white">$20.00</h1>
              <h1 class="font-medium text-black dark:text-white">184</h1>
              <h1 class="font-medium text-black dark:text-white">$3,680.00</h1>
              <h1 class="font-medium text-black dark:text-white">
                ASOS Ridley High Waist
              </h1>
              <h1 class="font-medium text-black dark:text-white">$79.49</h1>
              <h1 class="font-medium text-black dark:text-white">82</h1>
              <h1 class="font-medium text-black dark:text-white">$6,518.18</h1>
            </div>
            <div
              class="flex flex-col items-center px-7 py-5 gap-5 bg-light dark:bg-neutral-800 rounded-3xl"
            >
              <h1 class="text-2xl font-medium dark:text-white">
                Revenue by Location
              </h1>
              <img class="w-72" src="../assets/World Map.svg" alt="" />
              <section class="w-full flex flex-col gap-7">
                <div class="w-full flex flex-col gap-2 dark:text-white">
                  <div class="flex items-center justify-between">
                    <span class="font-medium">Singapore</span>
                    <span class="font-medium">61K</span>
                  </div>
                  <div class="bg-light w-full h-1 rounded-b-full">
                    <div class="bg-light-blue w-3/5 h-1 rounded-b-full"></div>
                  </div>
                </div>
                <div class="w-full flex flex-col gap-2">
                  <div
                    class="flex items-center justify-between dark:text-white"
                  >
                    <span class="font-medium">New York</span>
                    <span class="font-medium">72K</span>
                  </div>
                  <div class="bg-light w-full h-1 rounded-b-full">
                    <div class="bg-light-blue w-1/2 h-1 rounded-b-full"></div>
                  </div>
                </div>
                <div class="w-full flex flex-col gap-2 dark:text-white">
                  <div class="flex items-center justify-between">
                    <span class="font-medium">San Francisco</span>
                    <span class="font-medium">39K</span>
                  </div>
                  <div class="bg-light w-full h-1 rounded-b-full">
                    <div class="bg-light-blue w-1/3 h-1 rounded-b-full"></div>
                  </div>
                </div>
                <div class="w-full flex flex-col gap-2 dark:text-white">
                  <div class="flex items-center justify-between">
                    <span class="font-medium">Sydney</span>
                    <span class="font-medium">25K</span>
                  </div>
                  <div class="bg-light w-full h-1 rounded-b-full">
                    <div class="bg-light-blue w-1/4 h-1 rounded-b-full"></div>
                  </div>
                </div>
              </section>
            </div>
            <div class="col-span-2 dark:bg-neutral-800 p-4 rounded-3xl">
              <canvas id="bar-chart" width="100%"></canvas>
            </div>
            <div class="bg-light dark:bg-neutral-800 p-4 rounded-3xl">
              <canvas id="radar-chart"></canvas>
            </div>
            <div class="bg-light dark:bg-neutral-800 p-4 rounded-3xl">
              <canvas id="radar-chart2"></canvas>
            </div>
          </section>`;
};

export default Dashboard;
