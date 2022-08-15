<template lang="pug">
.q-pa-md
    q-table(title="List Users" :rows="rows" :columns="columns" row-key="id" :rows-per-page-options="[3, 5, 10, 20]" v-model:pagination="pagination" :loading="loading" @request="fetchData" binary-state-sort)
        template(v-slot:top)
            q-btn(color='primary', :disable='loading', label='Create User', @click='createUser')
        template(v-slot:body-cell-avatar='props')
            q-td(:props='props')
                q-img(:src='props.value', spinner-color='primary', fit="contain", :ratio="1", style="max-width: 100px")
        template(v-slot:body-cell-action='props')
            q-td(:props='props')
                router-link.custom-link(:to='`/user/${props.row.id}`')
                    q-btn(round, color='primary', icon='mode_edit')
                q-btn.q-ma-sm(round, style="background: #FF0080; color: white", icon='delete', @click="showDeleteConfirm(props.row.id)")
        template(v-slot:loading)
            q-inner-loading(showing, color='primary')
        //- template(v-slot:item='props')
        //-     .q-pa-xs.col-xs-12.col-sm-6.col-md-4.col-lg-3.grid-style-transition(:style="props.selected ? 'transform: scale(0.95);' : ''")
        //-         q-card(:class="props.selected ? 'bg-grey-2' : ''")
        //-         q-card-section
        //-             q-checkbox(dense, v-model='props.selected', :label='props.row.first_name')
        //-         q-separator
        //-             q-list(dense)
        //-                 q-item(v-for="col in props.cols.filter(col => col.name !== 'desc')", :key='col.name')
        //-                     q-item-section
        //-                     q-item-label {{ col.label }}
        //-                     q-item-section(side)
        //-                     q-item-label(caption) {{ col.value }}
    DeleteUserConfirm(:id="currentId", :show="confirm", @close="onCloseConfirm", @success="onDeleteSuccess")
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import UserDataService from "@/services/UserDataService";
import { IUser } from "@/types/index";
import { QTableProps } from "quasar";

export default defineComponent({
	name: "List User",
    components: {
        DeleteUserConfirm: defineAsyncComponent(
			() => import("@/components/DeleteUserConfirm.vue")
		),
    },
	data() {
		return {
            rows: [],
            columns: [
                {
                    name: 'id',
                    required: true,
                    label: 'ID',
                    align: 'left',
                    field: (row: IUser) => row.id,
                },
                {
                    name: 'first_name',
                    required: true,
                    label: 'First Name',
                    align: 'left',
                    field: (row: IUser) => row.first_name,
                },
                {
                    name: 'last_name',
                    required: true,
                    label: 'Last Name',
                    align: 'left',
                    field: (row: IUser) => row.last_name,
                },
                {
                    name: 'email',
                    required: true,
                    label: 'Email',
                    align: 'left',
                    field: (row: IUser) => row.email,
                },
                {
                    name: 'avatar',
                    required: true,
                    label: 'Avatar',
                    align: 'center',
                    field: (row: IUser) => row.avatar,
                },
                {
                    name: 'action',
                    required: true,
                    label: 'Actions',
                    align: 'center',
                },
            ],
            pagination: {
                sortBy: 'desc',
                descending: false,
                page: 1,
                rowsPerPage: 10,
                rowsNumber: 10,
            },
            loading: false,
            currentId: null,
            confirm: 0 as number
        };
	},
	async mounted() {
        await this.fetchData({
            pagination: this.pagination,
        })
	},
	methods: {
        async fetchData(props: QTableProps) {
            const { page, rowsPerPage } = props.pagination
            this.loading = true
            const data: any = await UserDataService.list(page, rowsPerPage);
            this.pagination = {
                ...this.pagination,
                page: data.page,
                rowsPerPage: data.per_page,
                rowsNumber: data.total,
            }
			this.rows = data.data
            this.loading = false
        },
        showDeleteConfirm(id: number) {
            this.currentId = id
            this.confirm = true
        },
        onCloseConfirm() {
            this.currentId = 0
            this.confirm = false
        },
        onDeleteSuccess() {
            this.fetchData({
                pagination: this.pagination,
            })
        },
        createUser() {
            this.$router.push("/user/create")
        }
    },
});
</script>