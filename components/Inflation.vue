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
  name: 'Inflation',
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
          inflation: '1,075,091',
          inflation_rate: '2.23%',
          block_reward: 3,
        },
        {
          year: 2023,
          inflation: '716,727',
          inflation_rate: '1.46%',
          block_reward: 2,
        },
        {
          year: 2024,
          inflation: '358,364',
          inflation_rate: '0.73%',
          block_reward: 1,
        },
        {
          year: 2025,
          inflation: '358,364',
          inflation_rate: '0.72%',
          block_reward: 1,
        },
        {
          year: 2026,
          inflation: '358,364',
          inflation_rate: '0.72%',
          block_reward: 1,
        },
        {
          year: 2027,
          inflation: '358,364',
          inflation_rate: '0.71%',
          block_reward: 1,
        },
        {
          year: 2028,
          inflation: '358,364',
          inflation_rate: '0.71%',
          block_reward: 1,
        },
      ],
    }
  },
}
</script>
