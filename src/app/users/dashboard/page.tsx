'use client';
import { useState } from "react";
import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
import { useTranslation } from 'next-i18next';
const DashboardCRM = () => {
    const { t } = useTranslation('dashboard');
    const date = new Date();
    const [currentDate] = useState(date.toString().slice(0, 15));

    const totalMessages = 1254;
    const messagePlan = 2000;
    const remainingMessages = messagePlan - totalMessages;
    const activeLeads = 87;
    const wonLeads = 32;
    const conversations = 142;
    const avgMessagesPerDay = 42;
    const avgSalesMonth = 54;
    const mostScheduledTimes = 16;
    const totalSales = 16;
    const mostSaledProduct = "Remera de Boca";
    const avgSaleProduct = 60;

    const dataDay = [
        { day: 'Lun', value: 85, height: '40%' },
        { day: 'Mar', value: 138, height: '65%' },
        { day: 'Mié', value: 160, height: '75%' },
        { day: 'Jue', value: 192, height: '90%' },
        { day: 'Vie', value: 128, height: '60%' },
        { day: 'Sáb', value: 65, height: '30%' },
        { day: 'Dom', value: 42, height: '20%' }
    ];
    const productData = [
        { product: 'Shampoo X', value: 72 },
        { product: 'Cera Mate', value: 58 },
        { product: 'Pomada Fuerte', value: 46 },
        { product: 'Spray Fijador', value: 39 },
        { product: 'Crema Hidratante', value: 33 }
    ];
    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-6xl mx-auto">
                <div className="bg-emerald-800 text-white p-5 rounded-lg mb-5 flex justify-between items-center">
                    <h1 className="text-xl font-semibold">{t('dashboard')}</h1>
                    <div className="text-sm">{currentDate}</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                    <Card
                        title={t('numberMessage')}
                        value={totalMessages.toLocaleString()}
                        subtitle={"+15% vs. " + t('monthBefore')}
                    />

                    <Card
                        title={t('messagesRemain')}
                        value={remainingMessages.toLocaleString()}
                        subtitle={t('mensualPlan')}
                        progressBar={{
                            current: totalMessages,
                            total: messagePlan
                        }}
                    />

                    <Card
                        title={t('activeLeads')}
                        value={activeLeads}
                        subtitle={"12 " + t('newLeadsWeek')}
                    />

                    <Card
                        title={t('earnedleads')}
                        value={wonLeads}
                        subtitle={`${t('conversionRate')}: ${((wonLeads / activeLeads) * 100).toFixed(1)}%`}
                    />

                    <Card
                        title={t('numberConversations')}
                        value={conversations}
                        subtitle={"+8% vs. " + t('monthBefore')}
                    />

                    <Card
                        title={t('dailyAverage')}
                        value={avgMessagesPerDay}
                        subtitle={t('messagePerDay')}
                    />

                    <Card
                        title={t('mostScheduled')}
                        value={mostScheduledTimes}
                        subtitle={"16:00 " + t('mostScheduledTime')}
                    />
                    <Card
                        title={t('totalSales')}
                        value={totalSales}
                        subtitle={`${avgSalesMonth}% ` + t('avgSales') + " vs. " + t('monthBefore')}
                    />
                    <Card
                        title={t('mostSaledProduct')}
                        value={mostSaledProduct}
                        subtitle={`${avgSaleProduct}% ` + t('avgSaleProduct')}
                    />

                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Actividad semanal */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <div className="text-lg text-emerald-800 font-semibold mb-3">{t('weekActivity')}</div>
                        <br />
                        <BarChart data={dataDay} />
                        <div className="flex justify-center mt-4">
                            <div className="flex items-center text-xs text-gray-800">
                                <div className="w-3 h-3 rounded-full bg-emerald-600 mr-1"></div>
                                <span>{t('numberMessagePerDay')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Productos más vendidos */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <div className="text-lg text-emerald-800 font-semibold mb-3">{t('mostSaledProducts')}</div>
                        <br />
                        <BarChart data={productData} />
                        <div className="flex justify-center mt-4">
                            <div className="flex items-center text-xs text-gray-800">
                                <div className="w-3 h-3 rounded-full bg-emerald-600 mr-1"></div>
                                <span>{t('avgSales')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Mensajes restantes */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <div className="text-lg text-emerald-800 font-semibold mb-3">{t('planMessageRemaining')}</div>
                        <div className="h-48 flex items-center justify-center">
                            <div className="relative w-full max-w-xs">
                                <div className="h-32 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-800">{remainingMessages}</div>
                                        <div className="text-sm text-emerald-600">{t('messagesRemain')}</div>
                                    </div>
                                </div>
                                <div
                                    className="absolute bottom-0 left-0 h-32 bg-emerald-800 rounded-l-full"
                                    style={{ width: `${(totalMessages / messagePlan) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-5 mt-4">
                            <div className="flex items-center text-xs text-gray-800">
                                <div className="w-3 h-3 rounded-full bg-emerald-800 mr-1"></div>
                                <span>{t('usedMessage')}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-800">
                                <div className="w-3 h-3 rounded-full bg-emerald-300 mr-1"></div>
                                <span>{t('messagesRemain')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCRM;