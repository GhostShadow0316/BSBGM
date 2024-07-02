// data.js

let bg_list = [
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC80NzJLeWN1ZXU4NDhhR0I0QXJQZy5wbmcifQ:supercell:Qz5f3FVyBw9k5GqjiO53WaBOkU1H3MJnxDBLQXdO8Q8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DZzN4WWdNNDVDSG44ZVRpUWlTSC5wbmcifQ:supercell:mR0xCPYNlGacPhPI5kc6c3I8vWQa30q72YCKEZpCeJ8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC92RGJDajZIeUhROE1hbmMzeW5OcS5qcGcifQ:supercell:dkUhGcNv0EoY-v_7mM8gUa0cvFc4KQ1BugB2FQCXhZs",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9vRVBUZlBiNXB0V1Q1S3hDcGVnNy5qcGcifQ:supercell:tcfLS1SFCAvUJUnm4bZpbWAcKf8JJeMF2NvvjjrTgVw",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8zVHRrYU5vZ3pNNW5RdjlnWHliUC5wbmcifQ:supercell:JD5e_BvwsvjQa5FPIolhpZ1wGUa5aYQ-9dGt02QZJEI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9HYnI1amhvaWNpWkRndVczRUFmSi5wbmcifQ:supercell:haxq4MrS3LvOuv7ZvK4JM_-fXRyNmxHKC7yEfv-_p7o",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8zTlI3V2J2Z3AyY3Q2OHNibkUxdi5wbmcifQ:supercell:INSGe9xXqUE_BMBOuOErpMEv6oD49rlgY7morHVmZS8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8xb2ZpeDFVV3RjVjdZNHpOU1h0MS5wbmcifQ:supercell:o5MwOOGLIPRWo45vH541ce9mdu6PCZtegLHh3OXJhwE",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8ybWZjRG1IQ1docHV3R1dhc1RVVC5wbmcifQ:supercell:5y-BYegsMsMN9w1uTdTiRKu6k3kN6CqX75_crUayNPI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC96VFRzWU1TS0dCYmR1MUJjUHBhSi5wbmcifQ:supercell:c4_kXr3MkKb-5mR_EtglZzMbdrU985zVxZwvvnnWLKo",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83dXpmdzd6YVB6Z0NwR1BCOHM0bi5wbmcifQ:supercell:d2ZPF0mHoyonHUzkZ22SABBM7HwTQazTacqfpgAo3po",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9CVW91NUJCazF0Zm9ESEpNa0VBRy5wbmcifQ:supercell:ePfLz_JF39bsrjGJHbxYov1cdtBvZ_y_GEdme8lZf4M",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9hUWtrdU13cFk3S1BFZDJKb250di5wbmcifQ:supercell:2-rBtAygU9gHpfvb7PIxU-FhgJkusE1RvNttKuW55yc",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9YcTRVd05rWFNmUnpWNFpDNWVkZC5qcGcifQ:supercell:P6spNB6VZX17VylXVsR_dP7hTpIKweljcddd16Wn3XQ",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9xaFlyZWpOVmNQYkZzaVZHeUdQeC5wbmcifQ:supercell:uQ4EcLP_4q3fV2oQeUOb9Uc2HueQq1vtfeuyVaoJzbI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9SaGNmYjVlR1ZZejRoanZxNjhCMi5qcGcifQ:supercell:_uMhAkzbslkcV7ASXbd1cRYlWb-9Wh5aG94cNxfI6bs",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8zVGVVcFZRRGlMaVREa0hjd0dEMy5wbmcifQ:supercell:XUN62444wQVmMmzJ6kLsJhkx1WxVXgLDghkOVFjd0bs",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC95TndibmFyNXJuU0FTRUdYOGFEcy5wbmcifQ:supercell:csYz3AsBL5jUaAidkhcSmOJKJSP12ie7VrEjbo5AJmY",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83ZzFocUxLd0JFQk1Bb1l2TmRKSC5wbmcifQ:supercell:cAnTQw9rj4qJcfSZ8SIq7BqNWz6iw3FIm8eO3-c8LCI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9BUkdkTXBOTUtpZ1Z2bWIxS0oxWC5wbmcifQ:supercell:RF5zvoXvCmQAEDG1j4XaUozlmLa_PjLknzldc0VYHuI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9WOGZ0cmtSTGQyRjJzOURZTldudC5wbmcifQ:supercell:LGQuq5jQCDeUN0z7L_MKPtjTojrHiM6rK6mSWO4_oCE",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9mQXR4aUt6UDY0Um5SNXB5dE5nYi5wbmcifQ:supercell:oeUuvok49MKsTb7MmiNkrmiPIM_HklTddxtu2GK37Pg",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9wYkZHNTdBZzYyMUM4R0dEVHo1TS5wbmcifQ:supercell:RevPE0d0Mj1UOpAs7PJWegDBRmMMGCfOEyzlJ5uprYo",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9HRE5zbzdQcGt0UldlcnRIOWUzai5wbmcifQ:supercell:2I-fzyOqja4PTcbMswtj9MNTmgwWoRTv85m2LghR4Do",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC94RWJQejFXcGg1aDZvQWRybmJENS5wbmcifQ:supercell:x1Ev_SNLhXma1fe9Q6Tg4uZRfmNndcwnLf6REx8FuxI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9FVG5FMlpuM01TYnlyM0ZuMm95WS5wbmcifQ:supercell:uTkLcCina72g89487x30uqPeNPQWEZEMka2y2gTrMCQ",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9ONnJzSnV5dkNoYnN4YW80dFc1Ui5qcGcifQ:supercell:pXSFKMIi7zbsEHDmhm0kTPeLy-IpYLaDj6-cbOW47Rg",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9mdGY5RkZ2UHdWWnZtMlRWSHhVYy5qcGcifQ:supercell:raM37P_3hFJiLA2wUGHVYgUqkbhNF_Dmv-4FBodUk0Y",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9IWDV5cHdGWkZWOUpvNTlxbVZSeC5wbmcifQ:supercell:z5SyabDHLTAlk6FiuNcMf_BTY_DXRaTKR-jRoWMc-f8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Ubko4amhXTGpxQXIyTVV3d0NqdC5wbmcifQ:supercell:GzIcukXHYd9IgKRDI3bsSyQiGvHe0zkL3fSS6RSugPE",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9qUjNFaGVvYWM5WGdrMWtpNUtVMy5wbmcifQ:supercell:GsMblp6zeXa1AnzOzAZMl1x3mkTJpY_UqX-NUTmve60",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9TWTQyWHczOFZLaDFON3F3eHdHNC5wbmcifQ:supercell:ZaThoPOsza9ue2J2DUUsH6VJ63gEp-Dqeq0AYGsBKew",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC94V2ZpUDdBSDFoNm0ydUMxV29LVi5wbmcifQ:supercell:KVj1fhV2yyCB7QxSyzvK6ogiMvOlSBBYYjLqKMO4ac0",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC96azFxN1hTaFpoMVJDcW5hdmM2eC5wbmcifQ:supercell:eWxxEX1sBi9tIkZPCyVhgckh4p_EIpOZjNqUpumsGVU",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9ib29aaHFwMVlKdjVXN21RWW1pTi5wbmcifQ:supercell:JJk5Sq8uvo-DOz_pc1oI633f36HbC27sH-j5n7eQmnw",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8zaWhiM3lENWI5RVM5MjVIcmp1SC5wbmcifQ:supercell:rZL2PrIUiMUmVeaD0N5mZO5SwupLwC6ygpa_5OgVXfc",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9uWjlhak5HaTdUZWZjY0Q4QWNUYi5wbmcifQ:supercell:9m-H1VoaKpNdBV7Jmjph0AXvVSjJ-Hz7vhTCU1RRgws",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9qOGR3RDU5SDJSaENjamtXYWR1YS5wbmcifQ:supercell:E8lVEJL8BjpOYI0iDDkiNrk6o14XQcAAKRGhdefGxAI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9rVXlzenlVZFV4NnJ1ZkFMZzRpYi5wbmcifQ:supercell:4oNgYyrJ82flnbMR7e2dhjLOvixkeORQO4VN_Xwzr5I",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC84S1YxWnJNUURKZ2pybjJVNVY1TS5wbmcifQ:supercell:JDAQ4f_VXNJ9C5W0S4sHTeh71azTXmGqIh7LbI_o6DU",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83MTZoVEFBS1FyU1RnVHFxbjFGNy5wbmcifQ:supercell:zPrC_TFPICZPjXHuf9Wp28BMZCL0pXM8O-COOXSEg7o",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9hNWdLcXA1RXJmc2h3bzdiR042TS5qcGcifQ:supercell:EamC3zHjP37hnn8mfS3pUXnFTVs99hlsmKUDqj19lt0",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9TcktIU1dvMWtuNmJCOThvQnVEdi5qcGcifQ:supercell:MzDicNUWvchFR21An4rPmF-iG4U2wJpsI-qPeKPZnxY",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC90QnVtcFFtR1BlQkFTRnd3dkVEaS5wbmcifQ:supercell:MQbBBarO5eRngAHHGUkHQ0x-BJxcHBRA9eUvz00s15w",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9OenJVbkdrZTlDMkRBa01kRkVNcy5wbmcifQ:supercell:0bdICRTZDd3wvz3Jzh_8baMMrIsWzEbwrBRgYFPJWEQ",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9BNGJ6U1RKVlM2NFFlN3hSSmVBdC5wbmcifQ:supercell:5p_lCrgghBb1bkcIcN5UqdqUBb-v63WLfOEiQejMPHg",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC96N2VpWXJERXNBNk1aenZlQWM2VS5wbmcifQ:supercell:T0IWJvkqQS_nin24o7pBRkTIPkN-pcCU4aBfZIakwBY",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC93eGdIRHpVZHlKeXRWYldIY1ZFZC5wbmcifQ:supercell:llciRsVj3-RttI-7HsEGneuFoKvz6Qz2N6xWX_9WeuU",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9ibmE3M2EyZFRZdjRhdHVDQm5YTS5wbmcifQ:supercell:pue_6wrj2m9lfluKdRISaCAnREz0_Pqe8c7v1haDFHw",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9vTTJaNjhnd3dlUVlkWWk5Q05WNS5qcGcifQ:supercell:tcMXAMSLDl3xGJNKtX1J29CexGrm_qLF7cQ1cp1isMQ",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9CbkhVYlFxaVJlcWh1b2UyajNhRS5wbmcifQ:supercell:fibBYUQrm1iYHxZ7cOXhPqDDoqLPVPNdYxFrlIDyi-o",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC94OHlwQVdDY0N5ekhwVmIxR0w5ei5wbmcifQ:supercell:Tax4rAn5J-D1FJ1-Jw1jXSTRHOvXL4pTzmmb_Y38jZU",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9CUjU3VGJHdGZHTFBiZmt5enA1Qy5wbmcifQ:supercell:Q5lFzDBCukLeIQIdHBxUWygd9duL9JNfrnuOfQul51o",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9GSlBQdjk2VEpEWmk4czVVQXo1cS5wbmcifQ:supercell:rbgvjboKCGbFVkbv4JTyRf3b-fBl-DbT8Atlkl2a7j8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nQlVxWFJmY3lEYW1uSDRrdXZGaC5wbmcifQ:supercell:CpFWk6W7L1JDpP8L0_FLoL5MFtLRilYUgMUTdeXKN_U",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9pdjFUYmJBQmo2MmZXa0J2U3RqeC5wbmcifQ:supercell:6DeLZo2_eLmXgwELVp2I5ZJIE7VxdsAx64B8aJ88Jyw",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9wOXJiQXFFckZyWk1iYWMxY052My5wbmcifQ:supercell:Q0roh7QkC-3oriR7W1LUb3ByzptMz7qjMcYo5OiG-co",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nTTFSeXFRYXNQaDlzdXIyNkJYTi5wbmcifQ:supercell:pdOxD617cuS9ePPULH1BOGV6qQbVZt4_cv7C-Z4lMzc",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC96TGkydjhmQXR5cXFrRnRDSFpBTS5wbmcifQ:supercell:DgjiQ9Q2TNgiwwKLTK7fkEaJa7BQJvu3D-GtvToAL6k",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9mZWRGMm5tOThiNmRXVVN5UzhzVS5wbmcifQ:supercell:aG2klmHDNhsZqcD8V05IUu3VWDlImjvafq2iFQnwIMs",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC93Sno2V2lER3Y4WDhmc1RCTXBBdi5qcGcifQ:supercell:rl4c4B5nmGJAAkizPjDFYDaCvCIyc8zWHOg5fJaX8P0",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC92dU00dnREbVVGUzZZR1ZIR0VCai5wbmcifQ:supercell:_f1r1TlC1lf4o_A9a_MXZ1EVvGsfY1ob-yBeYWhbKyk",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC92U0Q2YVVhb3FnSnlZNWROTjg5Yi5wbmcifQ:supercell:wRwcg6mEcNou4TB1fXKHQ7KAAh5VWh7e9o-1sr7YY1s",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Icnl4Q3dyalBuR3d0VU5OV3lYYi5qcGcifQ:supercell:BeX52ogL1CzwWgy0FXvrgQi4GshHzhWfhOkjrgnJdPU",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9VNDdWR1NzMWtQNlMyenlZVHFpWS5wbmcifQ:supercell:dfBBY5nX5NFXU9d9s5w0tnzTBcuHLZJm1epg7XWKq3Y",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9zR3d3ZzFFRURVRm5CMVp0c21GTS5wbmcifQ:supercell:Lej1DkWFsOlEqGhjbPyD5llxkAX10Pq7B1Ro_6G2d8U",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DRW50dU42WVZRMWpFWEY0UWtwby5wbmcifQ:supercell:dc5HZSveIuyWdxJ6N43aIgGlhDURty-CDUrshtbtSm4",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9mTWtXVkhxbXlkSjk1d0UyY0VCTC5wbmcifQ:supercell:C6VVWBnhR9kpTlM-9e_QPZYTZMPa2ultKXGVvemJfp0",
]

let bgm_list = [
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9IRG85Q3hrWlZpUVoxZHhRN25Tdi5vZ2cifQ:supercell:gOtWY5e0bOrW0A_mYHCvGa_iIds7zU_VEU3ZZQ-x4t0",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC93a3BhVjMzaUc4UlZhSmdYcmVTYi5vZ2cifQ:supercell:V0KbVJygXSKZ8idrTLObcOqUXcBMvRfM8jBjsbkDI6M",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XUmFHa2h6OWdHU005UVZmdVRoMi5vZ2cifQ:supercell:Sjf70YjC7ojUV8m2ZCVs_M3Xaa7igENrXTEs09kiy_I",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9EbVcyZnNaQWFzbmR0cGgyeHdQSy5vZ2cifQ:supercell:LkWzCVNaV8qxnv1gGEVHDvOPqdxN1V60atd0M1Q9tLk",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9YaEJhM0I3V2EyekR3d1lrZ3A4Uy5vZ2cifQ:supercell:DGYIGBrojp826osI35vgHEjb2_UA8fXbEm6qeZzIGE8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9YaEJhM0I3V2EyekR3d1lrZ3A4Uy5vZ2cifQ:supercell:DGYIGBrojp826osI35vgHEjb2_UA8fXbEm6qeZzIGE8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9NWlVDUDM0Y1F2UVJ0RmFWVkpSYi5vZ2cifQ:supercell:foynwdRmIzRxaLZ7AVuUtpZs9T-A1ZLvq4JMwzJbaXY",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC90cHYxUnVFQXl1dTZ2SEs2TFRxei5vZ2cifQ:supercell:o9rzr-CXh2M5c8AMRxKvRUbV0iPLeZSb9dmOude0bcA",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9HZ2ljVTFBQks5MXJyY3Bjc2hxaC5vZ2cifQ:supercell:LMf2wWDH_01QnWVn_dMHyMkklrhXlglDigoGWnxk9ME",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC85ZnBFU21ZUHdnamFSb3J2TFROcC5vZ2cifQ:supercell:YrKod5PiwkSU2Jewoh6QxvHukvRfbw6U38QmF7VXxKE",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9YaEJhM0I3V2EyekR3d1lrZ3A4Uy5vZ2cifQ:supercell:DGYIGBrojp826osI35vgHEjb2_UA8fXbEm6qeZzIGE8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9NWlVDUDM0Y1F2UVJ0RmFWVkpSYi5vZ2cifQ:supercell:foynwdRmIzRxaLZ7AVuUtpZs9T-A1ZLvq4JMwzJbaXY",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC90cHYxUnVFQXl1dTZ2SEs2TFRxei5vZ2cifQ:supercell:o9rzr-CXh2M5c8AMRxKvRUbV0iPLeZSb9dmOude0bcA",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9HZ2ljVTFBQks5MXJyY3Bjc2hxaC5vZ2cifQ:supercell:LMf2wWDH_01QnWVn_dMHyMkklrhXlglDigoGWnxk9ME",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9vU2gzZVAyVFBWdFR0RmRwZHZOZS5vZ2cifQ:supercell:OfsfzyGqoxw02XZ1wUTGw4c_GI-HO97V_hhPUFDOVoA",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9WdzdINWt5aXVtQlVONjhrY21Oby5vZ2cifQ:supercell:M5kYiiFXhSInEVtSnS-DrBLjwJGYzHofbVn09Kk7BAw",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9EcHR1UVBIUlIyWUhkUGlVaWkzZi5vZ2cifQ:supercell:2CLPMGq5jRj2Bxo0B_hTfyLSGcZXA6GW7muewQzwZaE",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9tMzdZV1RHS1RzYms3VmdaUW9QbS5vZ2cifQ:supercell:gnSG0mIKanadwIwwHeydKSRddXfXf6K2bPHaV3FbWkg",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9wclNDN0haUGc4eWFwRmZlN0dpZi5vZ2cifQ:supercell:DGXYspbggYS8iLSeevYKiWjb5p5f7fyLl7pMBC-QxYM",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9uV0xxVlBOS0FKUFpEMloxRjN4ei5vZ2cifQ:supercell:5geY49ld4CI6zBi5EJaMxeFcLxmV6RRO0er-m89UJhw",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8xVmd5SzlHSGJ2c2kyazc1VHpKRS5vZ2cifQ:supercell:mZ1pFFx9jD9hYrPO-u6EBAMzw1bk1FTh-xz-cF8tdhQ",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8xVmd5SzlHSGJ2c2kyazc1VHpKRS5vZ2cifQ:supercell:mZ1pFFx9jD9hYrPO-u6EBAMzw1bk1FTh-xz-cF8tdhQ",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC85S1VqbVpaYThiOW01V2dLdUM5RS5vZ2cifQ:supercell:M-lj7qWwtvu5bN6ykmNzRk0_zhQOKkktIQcONieDIWI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9xRFhNb0VvSERHYlJoSHY1SndvOC5vZ2cifQ:supercell:ouJvUYr8hQ-172DSAI-SGRo374PJVtMMsCHbQW2--NU",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DUXhWcDRqNFNLTnE1UDlpd0p6cS5vZ2cifQ:supercell:ajQpfxs2Ahzy3QjOKlxhhnx2hKTXbM6Lzcrj0lSZsVE",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC91TDNyVkpwa1hQNkxQeVZ6bXAxVy5vZ2cifQ:supercell:S-1g9bLxRb4VTwhA3-SoT2nh7eVNziA6NlSBBFSX9CI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9zVGZxYnFpbmkzZWhOYzNGc2Q3SC53YXYifQ:supercell:JDE7DDciolyyyCS33Pd5s0M4ZCCs5wVPtFJ_xNm22AI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9mYmFDQkYzY1pYVWZFWXRLQVBmMy5vZ2cifQ:supercell:uVRNtDkEfvPeQPHmXA4WY-KRPJdFkRMfj_kaxsRl3ec",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9rVmlKd3F5aW1hSEtuYW5wZ1dKOS5vZ2cifQ:supercell:c426XHhmMrrAVqfDKEoW0L7Lk7mqhKMr1ean-bvqoLs",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9MUWtoczRDZWlYN1FYb3NMV3BOTi5vZ2cifQ:supercell:Gm96dCl3JduNWQio6WMIS6YMTp0hDIl_e1pOaZNuuxs",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XcDlFdzdncEdnNWV6SHdVOGNoUS5vZ2cifQ:supercell:aMMYEGOeGXy9y8hFaadWWCS7u2cEyKt7RdsnfEbTaP0",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9jOHF0RHlxTGRwN3BWMUEzRXljaC5vZ2cifQ:supercell:HCIUSEmXCyo5Bnho-LVWdL5Z6DLnHF0hoDmP3nEOuhU",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DUjlzUjNzVGh3aTlCbmcxNENaQy5vZ2cifQ:supercell:VcjwHtsIeBKHfPO_GbyKv1j3ffxP7DrmL_AfpLF6aHk",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9WOTlpQ0dkOWY4Sm1Vc28xRGVNNy5vZ2cifQ:supercell:XxtgM5TYNUvLUF5BAy0e0swEPLXBuQ4JZH35tAmQJe8",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8yNllBV2FOVFVtNGdLTGF1MVQ0dS5vZ2cifQ:supercell:C9DO29VQCxtYv5eoSG-CduG5ZwFGfO2HHbVQCa2zjgs",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XcDlFdzdncEdnNWV6SHdVOGNoUS5vZ2cifQ:supercell:aMMYEGOeGXy9y8hFaadWWCS7u2cEyKt7RdsnfEbTaP0",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9ld25ETENpY2VCdGNkaG56eWt2Yi5vZ2cifQ:supercell:8CS3kORl51SZUuxNxhSYPlewfthqmVSY3ZxSJhANDoI",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9ZTktiTUE4enBvN0ZWS2hMa3A3VC5vZ2cifQ:supercell:kVG34kSM3JVq6TnuJ-rKJMJBFxVrP0_2X1vfTQOSSog",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9RSmZEdTRURzVXajhwWTU5Rk55Wi5vZ2cifQ:supercell:3OqeDOAYteBBmzJyvZ_tlj_1_1jE05_Z8oqvdrY9Of0",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC80Y25uUktxQ0ZSdXpEczRLWmNLWS5vZ2cifQ:supercell:UuqVY8-AWuq4C8_J9EIOVWGQBphl-wcq1ea47nhl3TM",
    "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9tUEtqTDJWd3M0MURUNmh6ZzFFSy5vZ2cifQ:supercell:EEtXZ27WfFbnS5-SM21KhXUj7Xxc8rFmEAehAZdBNqQ",
]