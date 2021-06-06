<template>
  <div class="container">
    <div class="top">
      <a-row>
        <a-col :span="10" offset="8">
          <h1>
            用户登陆界面
          </h1>
        </a-col>
      </a-row>
    </div>
    <div class="main">
      <a-form
        layout="vertical"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 8, offset: 8 }"
        :rules="rules"
      >
        <a-form-item>
          <a-input v-model:value="formState.userName" placeholder="Username">
            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)"/></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.password" type="password" placeholder="Password">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)"/></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.userName === '' || formState.password === ''"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, UnwrapRef } from 'vue';
import { login } from '@/api/login';
interface FormState {
  userName: string;
  password: string;
}
export default defineComponent({
  setup() {
    const rules = {
      username: [
        { required: true, message: 'Please input Activity username', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please enter password', trigger: 'blur' },
        { length: 4, message: 'Length should be 4 ', trigger: 'blur' },
      ],
    };
    const formState: UnwrapRef<FormState> = reactive({
      userName: 'root',
      password: '2020',
    });
    const handleFinish = async () => {
      const result = await login(formState);
      console.log('login result::', result);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    return {
      rules,
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 110px 0 144px;
  flex-flow: column wrap;
  //   align-items: center;
  .top {
    width: 100%;
  }
}
</style>
