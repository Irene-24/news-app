import * as React from "react";

function MyComponent() {
  return (
    <div className="bg-slate-100 flex flex-col pr-5">
      <div className="self-stretch flex flex-col mr-3.5 mb-8 max-md:max-w-full max-md:mr-2.5">
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
              <div className="bg-slate-100 flex w-[260px] max-w-full flex-col mx-auto pr-4 py-5 max-md:mt-10">
                <div className="flex w-full flex-col self-start">
                  <div className="self-center flex ml-0 w-[136px] max-w-full items-start gap-4">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.83] object-cover object-center w-[29px] overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-700 text-lg font-bold self-center my-auto whitespace-nowrap">
                      Aster News
                    </div>
                  </div>
                  <div className="bg-sky-400 bg-opacity-10 self-stretch flex w-full flex-col mt-7 pl-4 pr-5 py-3.5 rounded-none">
                    <div className="flex w-[140px] max-w-full items-start justify-between gap-3 self-start max-md:justify-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/043f0107-5ca6-40f4-b582-1034ebfae463?"
                        className="aspect-square object-cover object-center w-1.5 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4351b81b-a4f6-49b1-a6c7-e10601de3bc9?"
                        className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-sky-400 text-base font-bold self-center my-auto whitespace-nowrap">
                        Top Stories
                      </div>
                    </div>
                  </div>
                  <div className="self-center flex w-40 max-w-full items-start justify-between gap-5 mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fb4582b-b0dc-4723-b4e7-7e1b8d2ee5fd?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Around the World
                    </div>
                  </div>
                  <div className="flex w-[105px] max-w-full items-start justify-between gap-5 ml-8 mt-8 self-start max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ba8f3c-034f-40bc-9597-4543dde7c84b?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Business
                    </div>
                  </div>
                  <div className="flex w-[87px] max-w-full items-start justify-between gap-5 ml-8 mt-8 self-start max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cf933bd-be59-45a3-9d9d-535dda1f8458?"
                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Health
                    </div>
                  </div>
                  <div className="flex w-[102px] max-w-full items-start justify-between gap-5 ml-8 mt-14 self-start max-md:ml-2.5 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/578c4ce6-78a0-4664-82f2-4b1faf3eac83?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Covid 19
                    </div>
                  </div>
                  <div className="self-center flex ml-0 w-[139px] max-w-full items-start justify-between gap-5 mt-14 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c14886e-7c6c-445d-b1df-46966bf8074e?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Entertainment
                    </div>
                  </div>
                  <div className="flex w-[89px] max-w-full items-start justify-between gap-5 ml-8 mt-8 self-start max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/23ac042d-acc1-4f94-8001-d7263aab7806?"
                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Sports
                    </div>
                  </div>
                  <div className="self-center flex ml-0 w-[117px] max-w-full items-start justify-between gap-5 mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4e7dc1-8b16-47f5-aae0-506738e6c5df?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Discussion
                    </div>
                  </div>
                  <div className="self-center flex w-[121px] max-w-full items-start justify-between gap-5 -ml-7 mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ee48d92-497c-4640-9e0d-42996985a89c?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      Notification
                    </div>
                  </div>
                  <div className="self-center flex w-44 max-w-full items-start justify-between gap-5 mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dbf89dc-db85-4375-bf39-eedefec9c801?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      News Feed Settings
                    </div>
                  </div>
                </div>
                <div className="rounded bg-sky-400 flex w-full flex-col ml-4 mt-32 p-5 self-start max-md:ml-2.5 max-md:mt-10">
                  <div className="self-stretch flex items-start justify-between gap-4 max-md:mr-0.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fec0bb58-db7e-44e2-acc1-bd839cef3b1c?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-white text-base self-center my-auto whitespace-nowrap">
                      Subscribe to Premium
                    </div>
                  </div>
                  <div className="self-stretch flex w-full items-start justify-between gap-5 mt-3">
                    <div className="text-white text-base self-center my-auto">
                      <span className="font-bold">$8</span>
                      <span className="">/m</span>
                    </div>
                    <div className="rounded bg-sky-700 self-stretch flex w-[110px] max-w-full flex-col px-5 py-3">
                      <div className="text-white text-base self-center whitespace-nowrap">
                        Upgrade
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-4 max-md:max-w-full max-md:mt-10">
                <div className="self-center flex w-full max-w-[1101px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="rounded bg-sky-400 bg-opacity-0 self-stretch flex w-[495px] max-w-full grow shrink-0 basis-auto items-start justify-between gap-5 pl-3.5 pr-3 py-3.5 max-md:flex-wrap">
                      <div className="text-sky-950 text-opacity-30 text-base my-auto">
                        Search for news..
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9457008a-dc9b-4a65-98b3-f67573caf30a?"
                        className="aspect-square object-cover object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                    <div className="rounded border-[color:var(--amber-black,#072D4B)] bg-slate-100 self-stretch flex w-64 max-w-full grow shrink-0 basis-auto items-start justify-between gap-5 pl-4 pr-2 py-3.5 border-[0.2px] border-solid">
                      <div className="text-sky-400 text-base font-medium my-auto">
                        <span className=" text-sky-950">Latest news on </span>
                        <span className="font-medium text-sky-400">
                          Covid-19
                        </span>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3257727d-fb6b-4071-b5b6-53b41ea2a781?"
                        className="aspect-[1.05] object-cover object-center w-5 overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                  </div>
                  <div className="self-center flex items-start gap-3.5 my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a685474-0d03-4dd0-8aab-b5cec0982f64?"
                      className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                      My Profile
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c82be54b-951f-45b0-83f8-77178b9deb28?"
                    className="aspect-[2] object-cover object-center w-4 overflow-hidden self-center max-w-full my-auto"
                  />
                </div>
                <div className="self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[73%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <div className="text-sky-950 text-xl font-bold self-start whitespace-nowrap">
                          Top Stories for you
                        </div>
                        <div className="flex w-[754px] max-w-full items-start gap-2.5 mt-6 self-start max-md:flex-wrap max-md:justify-center">
                          <div className="text-white text-base self-stretch shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-sky-400 w-[52px] max-w-full pl-4 pr-5 py-2.5 rounded-3xl whitespace-nowrap">
                            All
                          </div>
                          <div className="text-sky-950 text-base self-stretch border-[color:var(--white,#FFF)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white w-[86px] max-w-full pl-4 pr-5 py-2.5 rounded-3xl border-[0.2px] border-solid whitespace-nowrap">
                            Android
                          </div>
                          <div className="text-sky-950 text-base self-stretch border-[color:var(--white,#FFF)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white w-20 max-w-full pl-4 pr-5 py-2.5 rounded-3xl border-[0.2px] border-solid whitespace-nowrap">
                            Cricket
                          </div>
                          <div className="text-sky-950 text-base self-stretch border-[color:var(--white,#FFF)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white w-20 max-w-full pl-4 pr-5 py-2.5 rounded-3xl border-[0.2px] border-solid whitespace-nowrap">
                            iPhone
                          </div>
                          <div className="text-sky-950 text-base self-stretch border-[color:var(--white,#FFF)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white w-20 max-w-full pl-4 pr-5 py-2 rounded-3xl border-[0.2px] border-solid whitespace-nowrap">
                            Google
                          </div>
                          <div className="text-sky-950 text-base self-stretch border-[color:var(--white,#FFF)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white w-[148px] max-w-full pl-4 pr-4 py-2 rounded-3xl border-[0.2px] border-solid whitespace-nowrap">
                            Nano Technology
                          </div>
                          <div className="text-sky-950 text-base self-stretch border-[color:var(--white,#FFF)] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white w-[126px] max-w-full pl-4 pr-5 py-2.5 rounded-3xl border-[0.2px] border-solid whitespace-nowrap">
                            Mental Health
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2d847c7-9615-4b7c-961c-c1db9645fb9a?"
                            className="aspect-square object-cover object-center w-6 overflow-hidden self-center max-w-full my-auto"
                          />
                        </div>
                        <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white w-[771px] max-w-full mt-6 pl-6 pr-4 py-4 self-start">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
                              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                                <div className="text-sky-950 text-lg font-medium self-start max-md:max-w-full">
                                  Samsung Galaxy F22 launched in India: Price,
                                  features, other details
                                </div>
                                <div className="text-sky-950 text-sm leading-6 opacity-60 max-w-[511px] mt-2 self-start max-md:max-w-full">
                                  Samsung Galaxy F22 has been launched in India.
                                  The new smartphone has been priced in the
                                  mid-range segment. The new smartphone is
                                  powered by a MediaTek chipset and features a
                                  high refresh rate AMOLED display.
                                </div>
                                <div className="flex w-[383px] max-w-full items-start justify-between gap-5 mt-5 self-start max-md:justify-center">
                                  <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                                      The Mint
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a0b089b-c3ee-46a1-a3e0-ffc1bcb99c42?"
                                      className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                                    />
                                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                                      15 mins ago
                                    </div>
                                  </div>
                                  <div className="self-stretch flex items-start justify-between gap-2">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c60f51a-9a5e-4ed1-ac67-f790d88d91b8?"
                                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Share
                                    </div>
                                  </div>
                                  <div className="self-stretch flex items-start justify-between gap-2">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2e109f7-9774-4012-831e-8175e64f0c9a?"
                                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Read Later
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                              <img
                                loading="lazy"
                                srcSet="..."
                                className="aspect-[1.33] object-cover object-center w-[173px] overflow-hidden max-w-full max-md:mt-10"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[771px] max-w-full mt-5 self-start">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow flex-col flex-1 mx-auto pl-5 pr-4 py-4 max-md:mt-5">
                                <div className="self-stretch flex w-full items-start justify-between gap-5 max-md:ml-1">
                                  <div className="self-center flex flex-col my-auto">
                                    <div className="text-sky-950 text-lg font-medium leading-6">
                                      Battlegrounds Mobile India iOS release
                                      date
                                    </div>
                                    <div className="text-sky-950 text-sm leading-6 opacity-60 mt-2.5">
                                      The reason behind their disappointment is
                                      that iPhone users have been..
                                      <br />
                                    </div>
                                  </div>
                                  <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="aspect-[1.02] object-cover object-center w-[134px] overflow-hidden self-stretch max-w-full"
                                  />
                                </div>
                                <div className="self-stretch flex w-full items-start justify-between gap-5 mt-3 max-md:justify-center max-md:ml-1">
                                  <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch">
                                      Sport Biz
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e50ebdcd-4ee1-4815-ba6b-32e7bedeac4a?"
                                      className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                                    />
                                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                                      42 mins ago
                                    </div>
                                  </div>
                                  <div className="self-stretch flex items-start justify-between gap-2">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f53d4f7-b154-467e-96e9-fd09ecb409fd?"
                                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Share
                                    </div>
                                  </div>
                                  <div className="self-stretch flex items-start justify-between gap-2">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7e858fa-b45c-4ccb-aa96-9a5c2dc9d415?"
                                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Read Later
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow items-start justify-between gap-2 flex-1 mx-auto pl-6 pr-4 py-4 max-md:mt-5">
                                <div className="flex flex-col mt-1.5 self-start">
                                  <div className="text-sky-950 text-lg font-medium leading-6">
                                    Instagram working on ‘Exclusive Stories’ for
                                    subscribers
                                  </div>
                                  <div className="text-sky-950 text-sm leading-6 opacity-60 mt-3">
                                    Instagram could be jumping on the paid
                                    subscription..
                                  </div>
                                  <div className="flex w-[187px] max-w-full items-start justify-between gap-5 mt-5 self-start">
                                    <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                                        The Mint
                                      </div>
                                      <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6200dc1b-9d44-4820-9819-8b8b855613fd?"
                                        className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                                      />
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                                        52 mins ago
                                      </div>
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b7880e8-c42c-49dd-a8a0-169d7d017106?"
                                      className="aspect-square object-cover object-center w-4 overflow-hidden self-stretch max-w-full"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col w-[141px] self-start">
                                  <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="aspect-[1.02] object-cover object-center w-full overflow-hidden self-stretch"
                                  />
                                  <div className="self-stretch flex items-start justify-between gap-2 mt-3 max-md:justify-center">
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto">
                                      Share
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/046739a1-c350-44d8-b783-b53621c8c641?"
                                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Read Later
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[771px] max-w-full mt-5 self-start">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow flex-col flex-1 mx-auto pl-5 pr-4 pt-6 pb-4 max-md:mt-5">
                                <div className="text-sky-950 text-lg font-medium leading-6 max-w-[334px] self-start max-md:ml-1">
                                  Petrol, diesel prices - July 6: Fuel prices
                                  unchanged after touching record high
                                </div>
                                <div className="text-sky-950 text-sm leading-6 opacity-60 self-center max-w-[334px] mt-1.5">
                                  The price of petrol remained unchanged on July
                                  6 after reaching a new record high on the
                                  previous day, according to a price
                                  notification by state-owned..
                                </div>
                                <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:justify-center max-md:ml-1">
                                  <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                                      Radar 52
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/553cfc12-90d8-4825-82ca-7bc78d502bf7?"
                                      className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                                    />
                                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                                      1 hour ago
                                    </div>
                                  </div>
                                  <div className="self-stretch flex items-start justify-between gap-2">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee0c237f-2db2-4dd4-a0d5-634af3c05237?"
                                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Share
                                    </div>
                                  </div>
                                  <div className="self-stretch flex items-start justify-between gap-2">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5205fbb-c963-4003-a53f-b95eaca1b505?"
                                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Read Later
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow items-start justify-between gap-2 flex-1 mx-auto pl-6 pr-4 py-4 max-md:mt-5">
                                <div className="flex flex-col mt-1.5 self-start">
                                  <div className="text-sky-950 text-lg font-medium leading-6">
                                    Android smartphone users alert! Remove these
                                    9 apps now
                                  </div>
                                  <div className="text-sky-950 text-sm leading-6 opacity-60 mt-2.5">
                                    Stealer trojans were spread as harmless
                                    software..
                                  </div>
                                  <div className="flex w-[187px] max-w-full items-start justify-between gap-5 mt-6 self-start">
                                    <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                                        Live Mint
                                      </div>
                                      <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e938efc-bff0-4172-b231-c38f99c26982?"
                                        className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                                      />
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                                        2 hours ago
                                      </div>
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/67f89c52-e612-4fb1-9c4f-44186aa7b38a?"
                                      className="aspect-square object-cover object-center w-4 overflow-hidden self-stretch max-w-full"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col w-[141px] self-start">
                                  <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="aspect-[1.02] object-cover object-center w-full overflow-hidden self-stretch"
                                  />
                                  <div className="self-stretch flex items-start justify-between gap-2 mt-3 max-md:justify-center">
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto">
                                      Share
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b866fe06-a8ec-4098-9ec0-ef59d2ded5b6?"
                                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Read Later
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[771px] max-w-full mt-5 self-start">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow items-start justify-between gap-2 flex-1 mx-auto pl-6 pr-4 py-4 max-md:mt-5">
                                <div className="flex flex-col mt-1.5 self-start">
                                  <div className="text-sky-950 text-lg font-medium leading-6">
                                    How to install Windows 11 on almost any
                                    unsupported PC
                                  </div>
                                  <div className="text-sky-950 text-sm leading-6 opacity-60 mt-2">
                                    Microsoft is allowing some unsupported
                                    computers..
                                  </div>
                                  <div className="flex w-[187px] max-w-full items-start justify-between gap-5 mt-5 self-start">
                                    <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                                        Tech Mint
                                      </div>
                                      <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f5ddcc-eb48-4610-8e57-ee7ceef39ff2?"
                                        className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                                      />
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                                        3 hours ago
                                      </div>
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d767051-2b44-4798-b131-b42e22dedce2?"
                                      className="aspect-square object-cover object-center w-4 overflow-hidden self-stretch max-w-full"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col w-[141px] self-start">
                                  <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="aspect-[1.02] object-cover object-center w-full overflow-hidden self-stretch"
                                  />
                                  <div className="self-stretch flex items-start justify-between gap-2 mt-3 max-md:justify-center">
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto">
                                      Share
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d463cfac-22c1-4929-91ce-2d1560f40240?"
                                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Read Later
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow items-start justify-between gap-2 flex-1 mx-auto pl-6 pr-4 py-4 max-md:mt-5">
                                <div className="flex flex-col mt-1.5 self-start">
                                  <div className="text-sky-950 text-lg font-medium leading-6">
                                    This charging feature from Android phones
                                    may come to iPhone 13
                                  </div>
                                  <div className="text-sky-950 text-sm leading-6 opacity-60 mt-2">
                                    You will always find a set of people who
                                    will say that..
                                  </div>
                                  <div className="flex w-[187px] max-w-full items-start justify-between gap-5 mt-5 self-start">
                                    <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                                        Live Mint
                                      </div>
                                      <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/97b8c69d-78a0-46ba-b84a-882c44b93999?"
                                        className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                                      />
                                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                                        5 hours ago
                                      </div>
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd67037-e269-436a-9d07-3b72672abef0?"
                                      className="aspect-square object-cover object-center w-4 overflow-hidden self-stretch max-w-full"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col w-[141px] self-start">
                                  <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="aspect-[1.02] object-cover object-center w-full overflow-hidden self-stretch"
                                  />
                                  <div className="self-stretch flex items-start justify-between gap-2 mt-3 max-md:justify-center">
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto">
                                      Share
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4ed9f4-9187-446c-ae08-7d375de0dfa0?"
                                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                                    />
                                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                                      Read Later
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col w-[285px] my-auto max-md:mt-10">
                        <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white self-stretch flex w-full flex-col p-4">
                          <div className="flex w-full items-start justify-between gap-5 self-start">
                            <div className="self-center flex flex-col my-auto">
                              <div className="text-sky-950 text-base self-start whitespace-nowrap">
                                Coimbatore, Tamil Nadu
                              </div>
                              <div className="text-sky-950 text-base mt-7 self-start whitespace-nowrap">
                                Sunny
                              </div>
                              <div className="text-sky-950 text-2xl font-bold mt-3.5 self-start whitespace-nowrap">
                                31 c
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9667229c-5a13-48b0-a47e-de773eb5c1c6?"
                                className="aspect-square object-cover object-center w-[18px] overflow-hidden max-w-full self-end"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46eb552b-e8b6-4332-9ba4-4c849f7e9abe?"
                                className="aspect-square object-cover object-center w-full overflow-hidden grow mt-6 self-end"
                              />
                            </div>
                          </div>
                          <div className="flex w-[118px] max-w-full items-start justify-between gap-5 mt-5 self-start">
                            <div className="text-sky-950 text-xs self-stretch">
                              Celsius
                            </div>
                            <div className="text-sky-950 text-xs opacity-30 self-stretch whitespace-nowrap">
                              Fahrenheit
                            </div>
                          </div>
                        </div>
                        <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white self-stretch flex w-full flex-col mt-4 p-4">
                          <div className="flex w-[183px] max-w-full items-start gap-3 self-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4597c0-9c8c-4e8f-9cce-75d56434769b?"
                              className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                            />
                            <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                              Become a Story Writer
                            </div>
                          </div>
                          <div className="flex w-full items-start justify-between gap-5 mt-2.5 self-start">
                            <div className="text-sky-950 text-xs leading-5 opacity-60 flex-1 my-auto">
                              Contribute stories and start earning.
                            </div>
                            <div className="text-sky-400 text-base self-stretch rounded border-[color:var(--sky-blue,#2F9FF8)] bg-white flex-1 pl-4 pr-5 py-3.5 border-[0.2px] border-solid whitespace-nowrap">
                              Know More
                            </div>
                          </div>
                        </div>
                        <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white self-stretch flex w-full flex-col mt-4 pl-4 pr-4 py-3.5">
                          <div className="self-stretch flex w-full items-start justify-between gap-5">
                            <div className="self-stretch flex items-start justify-between gap-3.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2a6fe4a-eb67-4b51-afed-d84b7b9bdb17?"
                                className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                              />
                              <div className="text-sky-950 text-base self-center my-auto whitespace-nowrap">
                                Quick Bytes
                              </div>
                            </div>
                            <div className="self-stretch flex items-start justify-between gap-2.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4522520e-a1b8-4edb-bfd6-733012580d2f?"
                                className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1655164-9888-4f13-aae1-5540bd9df99c?"
                                className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                              />
                            </div>
                          </div>
                          <div className="text-sky-950 text-xs leading-5 opacity-60 max-w-[241px] mt-4 self-start">
                            The price of petrol remained unchanged on July 6
                            after reaching a new record high on the previous
                            day, according to a price notification by
                            state-owned fuel retailers. The diesel price
                            remained stable for the second consecutive day.
                            <br />
                            <br />
                            The increase on July 5, 35th in two months, took the
                            petrol price in Delhi closer to Rs 100 per
                            litre-mark. The petrol price in the national capital
                            soared to Rs 99.9 a litre and diesel was priced at
                            Rs 89.4 per litre, according to Bharat Petroleum's
                            price listing.
                          </div>{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2def53c7-e2df-4ff7-9d87-f032dd0175ad?"
                            className="aspect-[13.5] object-cover object-center w-[54px] overflow-hidden self-center max-w-full mt-5"
                          />
                        </div>{" "}
                        <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white self-stretch flex w-full grow flex-col mt-4 px-5 py-6">
                          <div className="text-sky-950 text-base self-start whitespace-nowrap">
                            Subscribe to our newsletter
                          </div>{" "}
                          <div className="rounded border-[color:var(--amber-black,#072D4B)] bg-slate-100 flex w-full flex-col mt-4 pl-3.5 pr-5 py-3.5 border-[0.1px] border-solid self-start">
                            <div className="text-sky-950 text-base opacity-30 self-start whitespace-nowrap">
                              Enter Email
                            </div>
                          </div>{" "}
                          <div className="text-white text-center text-base rounded bg-sky-400 w-full mt-4 px-5 py-3.5 self-start">
                            Subscribe
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-center flex ml-0 w-[770px] max-w-full items-start justify-between gap-5 mt-10 max-md:flex-wrap">
          <div className="self-stretch flex items-start justify-between gap-3.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0813be00-4c3e-4d0b-a47c-cda3a83f4b8c?"
              className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
            />{" "}
            <div className="text-sky-950 text-base font-bold self-center my-auto whitespace-nowrap">
              Creators you should follow
            </div>
          </div>{" "}
          <div className="self-center flex items-start gap-5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60a4d4f6-ce79-44eb-ba63-14d5e34f58fa?"
              className="aspect-[1.05] object-cover object-center w-full opacity-20 overflow-hidden flex-1"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e43075c-b835-4ecd-8380-0c959bfc72b8?"
              className="aspect-[1.05] object-cover object-center w-full overflow-hidden flex-1"
            />
          </div>
        </div>{" "}
        <div className="self-center flex ml-0 w-[770px] max-w-full items-start gap-4 mt-3 max-md:flex-wrap max-md:justify-center">
          <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex flex-col flex-1 p-3.5">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-cover object-center w-[70px] overflow-hidden self-center max-w-full"
            />{" "}
            <div className="text-sky-950 text-center text-sm font-medium leading-6 mt-1">
              Shan Teylor
            </div>{" "}
            <div className="text-sky-950 text-center text-xs leading-5 opacity-40 self-center whitespace-nowrap">
              Tech Mint
            </div>{" "}
            <div className="rounded bg-sky-400 self-stretch flex w-full flex-col mt-3.5 px-5 py-3">
              <div className="text-white text-center text-base self-center whitespace-nowrap">
                Follow
              </div>
            </div>
          </div>{" "}
          <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex flex-col flex-1 p-3.5">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-cover object-center w-[70px] overflow-hidden self-center max-w-full"
            />{" "}
            <div className="text-sky-950 text-center text-sm font-medium leading-6 self-center mt-1 whitespace-nowrap">
              Mary Angela
            </div>{" "}
            <div className="text-sky-950 text-center text-xs leading-5 opacity-40">
              Live Mint
            </div>{" "}
            <div className="rounded bg-sky-400 self-stretch flex w-full flex-col mt-3.5 px-5 py-3">
              <div className="text-white text-center text-base self-center whitespace-nowrap">
                Follow
              </div>
            </div>
          </div>{" "}
          <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex flex-col flex-1 p-3.5">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-cover object-center w-[70px] overflow-hidden self-center max-w-full"
            />{" "}
            <div className="text-sky-950 text-center text-sm font-medium leading-6 self-center mt-1 whitespace-nowrap">
              Kyon Cho Chi
            </div>{" "}
            <div className="text-sky-950 text-center text-xs leading-5 opacity-40">
              Bizz Daily
            </div>{" "}
            <div className="rounded bg-sky-400 self-stretch flex w-full flex-col mt-3 px-5 py-3">
              <div className="text-white text-center text-base self-center whitespace-nowrap">
                Follow
              </div>
            </div>
          </div>{" "}
          <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex flex-col flex-1 p-3.5">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-cover object-center w-[70px] overflow-hidden self-center max-w-full"
            />{" "}
            <div className="text-sky-950 text-center text-sm font-medium leading-6 self-center mt-1 whitespace-nowrap">
              Paul Livingstone
            </div>{" "}
            <div className="text-sky-950 text-center text-xs leading-5 opacity-40">
              Sport Biz
            </div>{" "}
            <div className="rounded bg-sky-400 self-stretch flex w-full flex-col mt-3 px-5 py-3">
              <div className="text-white text-center text-base self-center whitespace-nowrap">
                Follow
              </div>
            </div>
          </div>{" "}
          <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex flex-col flex-1 p-3.5">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-cover object-center w-[70px] overflow-hidden self-center max-w-full"
            />{" "}
            <div className="text-sky-950 text-center text-sm font-medium leading-6 mt-1">
              Sara Jay
            </div>{" "}
            <div className="text-sky-950 text-center text-xs leading-5 opacity-40">
              Radar 52
            </div>{" "}
            <div className="rounded bg-sky-400 self-stretch flex w-full flex-col mt-3.5 px-5 py-3">
              <div className="text-white text-center text-base self-center whitespace-nowrap">
                Follow
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-center w-[771px] max-w-full -ml-3 mt-11 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow items-start justify-between gap-2 flex-1 mx-auto pl-6 pr-4 py-4 max-md:mt-5">
                <div className="flex flex-col mt-1.5 self-start">
                  <div className="text-sky-950 text-lg font-medium leading-6">
                    INDvENG Tests to be played in front of crowd
                    <br />
                  </div>{" "}
                  <div className="text-sky-950 text-sm leading-6 opacity-60 mt-1.5">
                    The 5-Test series between India & England is set to be
                    played in front of packed..
                  </div>{" "}
                  <div className="flex w-[187px] max-w-full items-start justify-between gap-5 mt-6 self-start">
                    <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch">
                        Sport Biz
                      </div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/585a0496-873d-4972-9985-275f3505e539?"
                        className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                      />{" "}
                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                        7 hours ago
                      </div>
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d07307da-1c55-49ed-b323-448b0566842a?"
                      className="aspect-square object-cover object-center w-4 overflow-hidden self-stretch max-w-full"
                    />
                  </div>
                </div>{" "}
                <div className="flex flex-col w-[141px] self-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.02] object-cover object-center w-full overflow-hidden self-stretch"
                  />{" "}
                  <div className="self-stretch flex items-start justify-between gap-2 mt-3 max-md:justify-center">
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto">
                      Share
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b64d53f-fe18-4db0-a7cb-715382a871b4?"
                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                    />{" "}
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                      Read Later
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow items-start justify-between gap-2 flex-1 mx-auto pl-6 pr-4 py-4 max-md:mt-5">
                <div className="flex flex-col mt-1.5 self-start">
                  <div className="text-sky-950 text-lg font-medium leading-6">
                    The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)
                  </div>{" "}
                  <div className="text-sky-950 text-sm leading-6 opacity-60 mt-2">
                    Driven by demand for connected earbuds and a..
                  </div>{" "}
                  <div className="flex w-[187px] max-w-full items-start justify-between gap-5 mt-6 self-start">
                    <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                        The Mint
                      </div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c14e2090-23b1-4765-b82e-ff97c51ae233?"
                        className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                      />{" "}
                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                        7 hours ago
                      </div>
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fb9a6a6-0d4c-4db0-95a9-bee5ca172f9a?"
                      className="aspect-square object-cover object-center w-4 overflow-hidden self-stretch max-w-full"
                    />
                  </div>
                </div>{" "}
                <div className="flex flex-col w-[141px] self-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.02] object-cover object-center w-full overflow-hidden self-stretch"
                  />{" "}
                  <div className="self-stretch flex items-start justify-between gap-2 mt-3 max-md:justify-center">
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto">
                      Share
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a4e6852-f45a-4ba9-a99d-a6666a66c132?"
                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                    />{" "}
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                      Read Later
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-center w-[771px] max-w-full -ml-3 mt-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow flex-col flex-1 mx-auto pl-5 pr-4 pt-6 pb-4 max-md:mt-5">
                <div className="text-sky-950 text-lg font-medium leading-6 max-w-[334px] self-start max-md:ml-1">
                  Biden's cold response to Afghanistan's collapse to have far
                  consequences
                  <br />
                </div>{" "}
                <div className="text-sky-950 text-sm leading-6 opacity-60 max-w-[334px] mt-2 self-start max-md:ml-1">
                  When US President Joe Biden chose in April to withdraw all
                  American forces from Afghanistan by September, we were among
                  those who judged..
                </div>{" "}
                <div className="flex w-full items-start justify-between gap-5 mt-6 self-start max-md:justify-center max-md:ml-1">
                  <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                      Radar 52
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a66bfef-061d-40a5-a49c-668b3b8d24b5?"
                      className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                    />{" "}
                    <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                      8 hours ago
                    </div>
                  </div>{" "}
                  <div className="self-stretch flex items-start justify-between gap-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/def93824-15e3-44ae-8197-0ac1e0ae3cd7?"
                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                    />{" "}
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                      Share
                    </div>
                  </div>{" "}
                  <div className="self-stretch flex items-start justify-between gap-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/195763f0-1a70-4db7-9a52-be16d0faf619?"
                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                    />{" "}
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                      Read Later
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="rounded shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] bg-white flex w-full grow items-start justify-between gap-2 flex-1 mx-auto pl-6 pr-4 py-4 max-md:mt-5">
                <div className="flex flex-col mt-1.5 self-start">
                  <div className="text-sky-950 text-lg font-medium leading-6">
                    Hardik Pandya 'is bowling and it is a very good sign' -
                    Suryakumar
                  </div>{" "}
                  <div className="text-sky-950 text-sm leading-6 opacity-60 mt-2">
                    I think that the team management and Hardik..
                  </div>{" "}
                  <div className="flex w-[187px] max-w-full items-start justify-between gap-5 mt-5 self-start">
                    <div className="self-center flex items-start gap-2 my-auto max-md:justify-center">
                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-start">
                        Cric Mint
                      </div>{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/48b93357-18e1-4303-a6ec-87ae650cc02e?"
                        className="aspect-square object-cover object-center w-0.5 opacity-40 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
                      />{" "}
                      <div className="text-sky-950 text-xs leading-5 opacity-40 self-stretch whitespace-nowrap">
                        9 hours ago
                      </div>
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abeff03-769f-410b-9f45-82b1b990c667?"
                      className="aspect-square object-cover object-center w-4 overflow-hidden self-stretch max-w-full"
                    />
                  </div>
                </div>{" "}
                <div className="flex flex-col w-[141px] self-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.02] object-cover object-center w-full overflow-hidden self-stretch"
                  />{" "}
                  <div className="self-stretch flex items-start justify-between gap-2 mt-3 max-md:justify-center">
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto">
                      Share
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/03468282-82ef-4ac6-9a71-08f32a68df6f?"
                      className="aspect-[1.06] object-cover object-center w-[17px] overflow-hidden self-stretch max-w-full"
                    />{" "}
                    <div className="text-sky-700 text-xs leading-5 self-center my-auto whitespace-nowrap">
                      Read Later
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="rounded border-[color:var(--amber-black,#072D4B)] self-center flex w-[118px] max-w-full flex-col -ml-3 mt-11 px-5 py-3.5 border-[0.2px] border-solid max-md:mt-10">
          <div className="text-sky-950 text-center text-base self-center whitespace-nowrap">
            Show More
          </div>
        </div>{" "}
        <div className="self-center flex ml-0 w-[770px] max-w-full items-start justify-between gap-5 mt-24 max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <div className="text-sky-950 text-xs leading-5 opacity-40">
            © Aster News, 2022
          </div>{" "}
          <div className="text-sky-950 text-center text-xs leading-5 opacity-40 self-start">
            Privacy Policy
          </div>{" "}
          <div className="text-sky-950 text-center text-xs leading-5 opacity-40 self-start whitespace-nowrap">
            Terms of Service
          </div>
        </div>
      </div>
    </div>
  );
}
