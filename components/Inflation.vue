<template>
  <v-card flat tile outlined class="mt-1">
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">{{ $t('monetaryPolicy.year') }}</th>
            <th class="text-left">{{ $t('monetaryPolicy.inflation') }}</th>
            <th class="text-left">{{ $t('monetaryPolicy.inflationRate') }}</th>
            <th class="text-left">{{ $t('monetaryPolicy.blockReward') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.year }}</td>
            <td>{{ item.inflation }}</td>
            <td>{{ item.inflation_rate }}</td>
            <td>{{ item.block_reward }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: 'InflationTable',
  data() {
    return {
      items: [
        {
          year: 2017,
          inflation: '2,866,909',
          inflation_rate: '7.29%',
          block_reward: 8,
        },
        {
          year: 2018,
          inflation: '2,508,545',
          inflation_rate: '6.00%',
          block_reward: 7,
        },
        {
          year: 2019,
          inflation: '2,150,182',
          inflation_rate: '4.89%',
          block_reward: 6,
        },
        {
          year: 2020,
          inflation: '1,791,818',
          inflation_rate: '3.91%',
          block_reward: 5,
        },
        {
          year: 2021,
          inflation: '1,433,455',
          inflation_rate: '3.04%',
          block_reward: 4,
        },
        {
          year: 2022,
          inflation: '2,151,654',
          inflation_rate: '4.58%',
          block_reward: 1.5,
        },
        {
          year: 2023,
          inflation: '2,151,654',
          inflation_rate: '4.38%',
          block_reward: 1.5,
        },
        {
          year: 2024,
          inflation: '2,151,654',
          inflation_rate: '4.20%',
          block_reward: 1.5,
        },
        {
          year: 2025,
          inflation: '2,151,654',
          inflation_rate: '4.03%',
          block_reward: 1.5,
        },
        {
          year: 2026,
          inflation: '2,151,654',
          inflation_rate: '3.73%',
          block_reward: 1.5,
        },
        {
          year: 2027,
          inflation: '2,151,654',
          inflation_rate: '3.59%',
          block_reward: 1.5,
        },
        {
          year: 2028,
          inflation: '2,151,654',
          inflation_rate: '3.47%',
          block_reward: 1.5,
        },
      ],
    }
  },
}
</script>
