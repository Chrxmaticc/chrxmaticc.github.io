"use client";

import { MeshGradient } from "@/components/(global)/GradientMesh";
import { motion } from "framer-motion";
import {
    ChevronDown,
    Gamepad2,
    HeartHandshake,
    MessageSquare,
    Settings,
    Shield,
    Sparkles,
    Cigarette,
    Wand2,
    Image as ImageIcon,
    Bot,
    Globe,
    Server,
    Users,
    Code,
    Terminal,
    CheckCircle2,
    XCircle,
    Star,
    Zap,
    Lock,
    Flame,
    Ghost,
    CircleDollarSign,
    PanelTop,
    Layers,
    LayoutDashboard,
    Home,
    Info,
    List,
    Music,
    Video,
    Camera,
    PenTool,
    FileText,
    Database
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
    FaGlobe,
    FaLastfm,
    FaServer,
    FaSoundcloud,
    FaSpotify,
    FaUsers,
    FaYoutube,
    FaDiscord,
    FaRobot,
    FaShieldAlt,
    FaGamepad,
    FaSmoking,
    FaImage,
    FaMagic,
    FaCode,
    FaTerminal,
    FaCrown,
    FaCoins,
    FaFire,
    FaGhost,
    FaLock,
    FaUserSecret,
    FaWeb,
    FaMobileAlt,
    FaComments,
    FaChartBar,
    FaDatabase
} from "react-icons/fa";
import {
    HiGift,
    HiOutlineCog,
    HiOutlineMusicNote,
    HiOutlineShieldCheck,
    HiOutlineStatusOnline
} from "react-icons/hi";
import { IoTerminal } from "react-icons/io5";
import { RiDiscordLine, RiRobot2Line } from "react-icons/ri";

let cachedStats: any = null;
let lastFetchTime: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000;

const HomePage = () => {
    const [stats, setStats] = useState({ users: 0, guilds: 0, commands: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                if (cachedStats && lastFetchTime && Date.now() - lastFetchTime < CACHE_DURATION) {
                    setStats(cachedStats);
                    return;
                }

                const [guildsRes, commandsRes] = await Promise.all([
                    fetch("https://chrxmee-ai-discord-bot.onrender.com/guilds"),
                    fetch("https://chrxmee-ai-discord-bot.onrender.com/commands")
                ]);
                if (!guildsRes.ok || !commandsRes.ok) throw new Error(`API error`);

                const guildsData = await guildsRes.json();
                const commandsData = await commandsRes.json();

                cachedStats = {
                    users: guildsData.reduce((acc: number, g: any) => acc + (g.memberCount || 0), 0),
                    guilds: guildsData.length,
                    commands: commandsData.length
                };
                lastFetchTime = Date.now();
                setStats(cachedStats);
            } catch (error) {
                console.error("Failed to fetch stats:", error);
                setStats({ users: 0, guilds: 389, commands: 100 });
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="relative w-full overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        width: "100%",
                        height: "100%"
                    }}
                />

                <div
                    className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-zinc-400/5"
                    style={{ mixBlendMode: "overlay", opacity: 0.5 }}
                />

                <MeshGradient />

                <div className="min-h-screen">
                    <div className="relative flex items-center justify-center mb-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}>
                                    <Image
                                        src="https://r2.chrxmaticc.com/chromed.png"
                                        alt="Chromed"
                                        width={200}
                                        height={200}
                                        className="mx-auto mb-8 drop-shadow-2xl"
                                        priority
                                    />
                                </motion.div>
                                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                        The Ultimate
                                    </span>
                                    <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                                        Discord Experience
                                    </span>
                                </h1>
                                <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
                                    Powering{" "}
                                    <span className="text-white font-semibold">
                                        {stats.guilds.toLocaleString()}
                                    </span>{" "}
                                    servers and serving{" "}
                                    <span className="text-white font-semibold">
                                        {stats.users.toLocaleString()}
                                    </span>{" "}
                                    users
                                    <br className="hidden sm:block" /> with advanced moderation,
                                    minigames, and AI features.
                                </p>
                                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                                    <a
                                        href="/invite"
                                        className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-all text-center">
                                        Add to Discord
                                    </a>
                                    <a
                                        href="/commands"
                                        className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all text-center">
                                        View Commands
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="relative py-24 -mx-[calc((100vw-100%)/2)] bg-[#0A0A0B]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold mb-4 relative">
                                    <span className="bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text">
                                        Why Choose Chromed?
                                    </span>
                                    <div className="absolute -inset-x-4 -inset-y-2 bg-white/5 blur-2xl -z-10 rounded-lg" />
                                </h2>
                                <p className="text-white/60">
                                    Experience the next generation of Discord bots
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="md:col-span-2 min-h-[600px] md:min-h-[320px] group relative bg-white/[0.02] border border-white/5 
                                             rounded-xl p-8 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="flex items-center gap-4 mb-6">
                                            <motion.div
                                                className="p-4 rounded-xl bg-white/[0.02]"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }}>
                                                <HiOutlineShieldCheck className="w-10 h-10" />
                                            </motion.div>
                                            <h3 className="text-2xl font-semibold text-white">
                                                Advanced Moderation
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <p className="text-white/60 leading-relaxed text-lg">
                                                    Keep your server safe with powerful moderation
                                                    tools and auto-moderation features
                                                </p>

                                                <div className="grid gap-4">
                                                    {[
                                                        {
                                                            name: "Auto-moderation filters",
                                                            description:
                                                                "Automatically detect and remove unwanted content"
                                                        },
                                                        {
                                                            name: "Warning system",
                                                            description:
                                                                "Track and manage user infractions"
                                                        },
                                                        {
                                                            name: "Anti-raid protection",
                                                            description:
                                                                "Prevent mass joins and spam attacks"
                                                        },
                                                        {
                                                            name: "Detailed logging",
                                                            description:
                                                                "Track all moderation actions"
                                                        }
                                                    ].map((feature, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            transition={{ delay: 0.1 * i }}
                                                            className="flex flex-col gap-1 bg-white/[0.02] p-4 rounded-lg 
                                                             hover:bg-white/[0.04] transition-colors cursor-pointer">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                                                <span className="text-white/80 font-medium">
                                                                    {feature.name}
                                                                </span>
                                                            </div>
                                                            <span className="text-white/40 text-sm pl-5">
                                                                {feature.description}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                                        <span className="text-white/60 text-sm">
                                                            Live Moderation Feed
                                                        </span>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {[
                                                            {
                                                                action: "Spam detected",
                                                                user: "User#1234",
                                                                time: "2m ago"
                                                            },
                                                            {
                                                                action: "Message filtered",
                                                                user: "User#5678",
                                                                time: "5m ago"
                                                            },
                                                            {
                                                                action: "Raid prevented",
                                                                user: "Multiple users",
                                                                time: "15m ago"
                                                            },
                                                            {
                                                                action: "Warning issued",
                                                                user: "User#9012",
                                                                time: "20m ago"
                                                            }
                                                        ].map((log, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, x: 20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.2 * i }}
                                                                className="flex flex-col gap-1">
                                                                <div className="flex items-center justify-between">
                                                                    <span className="text-white/80 text-sm">
                                                                        {log.action}
                                                                    </span>
                                                                    <span className="text-white/40 text-xs">
                                                                        {log.time}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                                                    <span className="text-white/40 text-xs">
                                                                        {log.user}
                                                                    </span>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                        <span className="text-white/60 text-sm">
                                                            Server Stats
                                                        </span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {[
                                                            {
                                                                label: "Messages Filtered",
                                                                value: "1,234"
                                                            },
                                                            {
                                                                label: "Raids Prevented",
                                                                value: "56"
                                                            },
                                                            {
                                                                label: "Warnings Issued",
                                                                value: "789"
                                                            },
                                                            {
                                                                label: "Actions Logged",
                                                                value: "2,345"
                                                            }
                                                        ].map((stat, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0 }}
                                                                whileInView={{ opacity: 1 }}
                                                                transition={{ delay: 0.1 * i }}
                                                                className="bg-white/[0.02] rounded p-2">
                                                                <div className="text-white/40 text-xs">
                                                                    {stat.label}
                                                                </div>
                                                                <div className="text-white font-medium">
                                                                    {stat.value}
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="md:col-span-1 min-h-[500px] md:min-h-[320px] group relative bg-white/[0.02] border border-white/5 
                                             rounded-xl p-8 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="flex items-center gap-4 mb-6">
                                            <motion.div
                                                className="p-4 rounded-xl bg-white/[0.02]"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }}>
                                                <Cigarette className="w-8 h-8" />
                                            </motion.div>
                                            <h3 className="text-xl font-semibold text-white">
                                                Juul Wars
                                            </h3>
                                        </div>

                                        <p className="text-white/60 leading-relaxed mb-8">
                                            The infamous virtual juul minigame. Pass it, steal it,
                                            break it, and watch the chaos unfold. Includes a full
                                            economy with hits currency, flavors, chargers, and
                                            medical bills.
                                        </p>

                                        <div className="space-y-6 overflow-hidden">
                                            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src="/juul.png"
                                                            alt="Juul"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-white font-medium truncate">
                                                            Juul Gremlin
                                                        </div>
                                                        <div className="text-white/60 text-sm truncate">
                                                            stealing your juul since 2024
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-white/20 rounded-full"
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: "65%" }}
                                                        transition={{
                                                            duration: 30,
                                                            repeat: Infinity
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                {[
                                                    {
                                                        name: "Hits",
                                                        source: "currency",
                                                        time: "∞",
                                                        image: "/hits.png"
                                                    },
                                                    {
                                                        name: "Flavors",
                                                        source: "shop",
                                                        time: "12",
                                                        image: "/flavors.png"
                                                    },
                                                    {
                                                        name: "Gremlin",
                                                        source: "chaos",
                                                        time: "10 min",
                                                        image: "/gremlin.png"
                                                    }
                                                ].map((track, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * i }}
                                                        className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-8 h-8 rounded overflow-hidden">
                                                                <Image
                                                                    src={track.image}
                                                                    alt={track.name}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <span className="text-white/60 text-sm">
                                                                {track.name}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-white/40 text-xs flex items-center gap-1">
                                                                {track.source === "currency" && (
                                                                    <FaCoins className="w-3 h-3" />
                                                                )}
                                                                {track.source === "shop" && (
                                                                    <FaShoppingBag className="w-3 h-3" />
                                                                )}
                                                                {track.source === "chaos" && (
                                                                    <FaFire className="w-3 h-3" />
                                                                )}
                                                                {track.source}
                                                            </span>
                                                            <span className="text-white/40 text-xs">
                                                                {track.time}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                {[
                                                    "High Stakes",
                                                    "Betrayal",
                                                    "No Rules",
                                                    "Pure Chaos"
                                                ].map((feature, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 1 }}
                                                        transition={{ delay: 0.1 * i }}
                                                        className="text-xs bg-white/[0.02] rounded px-3 py-2 text-white/40">
                                                        {feature}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="min-h-[320px] group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <motion.div
                                                className="p-4 rounded-xl bg-white/[0.02]"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }}>
                                                <IoTerminal className="w-8 h-8" />
                                            </motion.div>
                                            <h3 className="text-xl font-semibold text-white">
                                                Smart Commands
                                            </h3>
                                        </div>
                                        <p className="text-white/60">
                                            Intuitive command system with smart suggestions and
                                            auto-completion
                                        </p>
                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                            {["/juul", "/ask", "/mod", "/image"].map(
                                                (cmd, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 1 }}
                                                        transition={{ delay: 0.1 * i }}
                                                        className="text-sm bg-white/[0.02] rounded-lg px-3 py-2 hover:bg-white/[0.04] transition-colors cursor-pointer">
                                                        <span className="text-white/60">{cmd}</span>
                                                    </motion.div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="min-h-[320px] group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <motion.div
                                                className="p-4 rounded-xl bg-white/[0.02]"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }}>
                                                <RiRobot2Line className="w-8 h-8" />
                                            </motion.div>
                                            <h3 className="text-xl font-semibold text-white">
                                                AI Chat
                                            </h3>
                                        </div>
                                        <p className="text-white/60">
                                            Hybrid models, custom personalities, and natural
                                            conversation
                                        </p>
                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                className="bg-white/[0.02] rounded-lg p-3">
                                                <div className="text-2xl font-bold text-white">
                                                    7
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    Models
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className="bg-white/[0.02] rounded-lg p-3">
                                                <div className="text-2xl font-bold text-white">
                                                    10+
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    Personalities
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="min-h-[320px] group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <motion.div
                                                className="p-4 rounded-xl bg-white/[0.02]"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }}>
                                                <HiOutlineCog className="w-8 h-8" />
                                            </motion.div>
                                            <h3 className="text-xl font-semibold text-white">
                                                Server Analytics
                                            </h3>
                                        </div>
                                        <p className="text-white/60">
                                            Detailed insights about your server&apos;s activity and
                                            growth
                                        </p>
                                        <div className="h-20 flex items-end gap-1 mt-4">
                                            {[30, 40, 45, 50, 55, 60, 65].map((value, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${value}%` }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex-1 bg-white/10 rounded-t"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                                    <span
                                        className="bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text 
                                           drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                        Advanced Features
                                    </span>
                                    <div className="absolute -inset-x-4 -inset-y-2 bg-white/5 blur-2xl -z-10 rounded-lg" />
                                </h2>
                                <p className="text-white/60 text-lg">
                                    Powerful tools to enhance your Discord experience
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="md:col-span-3 group relative bg-white/[0.02] border border-white/5 rounded-xl p-8 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <motion.div
                                                className="p-4 rounded-xl bg-white/[0.02]"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }}>
                                                <HiGift className="w-8 h-8 text-pink-400" />
                                            </motion.div>
                                            <h3 className="text-2xl font-semibold text-white">
                                                Advanced Giveaway System
                                            </h3>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <p className="text-white/60 leading-relaxed">
                                                    Create engaging giveaways with custom
                                                    requirements, multiple winners, and bonus
                                                    entries
                                                </p>

                                                <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 1 }}
                                                        className="text-white/80">
                                                        ;giveaway start
                                                        <span className="text-blue-400">
                                                            {" "}
                                                            #announcements
                                                        </span>
                                                        <span className="text-green-400">
                                                            {" "}
                                                            Nitro
                                                        </span>
                                                        <span className="text-purple-400">
                                                            {" "}
                                                            --winners 3
                                                        </span>
                                                        <span className="text-yellow-400">
                                                            {" "}
                                                            --bonus @Booster:2
                                                        </span>
                                                    </motion.div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3">
                                                    {[
                                                        "Multiple winners",
                                                        "Role requirements",
                                                        "Bonus entries",
                                                        "Custom duration",
                                                        "Server boosters",
                                                        "Auto-end"
                                                    ].map((feature, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            transition={{ delay: 0.1 * i }}
                                                            className="flex items-center gap-2 text-sm bg-white/[0.02] rounded-lg px-3 py-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400/60" />
                                                            <span className="text-white/60">
                                                                {feature}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                                                    <span className="text-pink-400 font-semibold">
                                                        GIVEAWAY
                                                    </span>
                                                </div>

                                                <h4 className="text-xl font-semibold text-white mb-3">
                                                    Nitro Giveaway! 🎉
                                                </h4>

                                                <div className="space-y-4">
                                                    <div className="text-white/60 text-sm space-y-2">
                                                        <p>React with 🎉 to enter!</p>
                                                        <p>
                                                            Ends in:{" "}
                                                            <span className="text-white">
                                                                24 hours
                                                            </span>
                                                        </p>
                                                        <p>
                                                            Winners:{" "}
                                                            <span className="text-white">3</span>
                                                        </p>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="text-sm text-white/40">
                                                            Bonus Entries:
                                                        </div>
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            className="flex items-center gap-2 text-sm bg-white/[0.02] rounded px-3 py-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400/60" />
                                                            <span className="text-white/60">
                                                                Server Boosters (2x entries)
                                                            </span>
                                                        </motion.div>
                                                    </div>

                                                    <div className="flex items-center justify-between text-sm text-white/40">
                                                        <span>Hosted by @chromed</span>
                                                        <span>89 entries</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="md:col-span-3 group relative bg-white/[0.02] border border-white/5 rounded-xl p-8 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-2xl">👻</span>
                                            <h3 className="text-2xl font-semibold text-white">
                                                Custom Curselock & Quietlock
                                            </h3>
                                        </div>

                                        <p className="text-white/60 mb-8">
                                            Silence or curse users with webhook impersonation
                                            and zalgo text
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                                                    <div className="text-white/80">
                                                        ;curselock apply{" "}
                                                        <span className="text-yellow-400">
                                                            @user
                                                        </span>{" "}
                                                        <span className="text-purple-400">
                                                            --duration 5m
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    {[
                                                        ["Custom messages", "Webhook cloning"],
                                                        [
                                                            "Adjustable duration",
                                                            "Multiple modes"
                                                        ],
                                                        ["Channel specific", "Protected users"]
                                                    ].map((row, i) => (
                                                        <React.Fragment key={i}>
                                                            {row.map((feature, j) => (
                                                                <div
                                                                    key={j}
                                                                    className="text-sm bg-white/[0.02] rounded px-3 py-2 text-white/40">
                                                                    {feature}
                                                                </div>
                                                            ))}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-black/20 rounded-lg p-6">
                                                <div className="text-purple-400 text-sm mb-4">
                                                    #cursed
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="bg-black/40 rounded-lg p-4">
                                                        <div className="flex items-start gap-3">
                                                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                                                <Image
                                                                    src="https://r2.chrxmaticc.com/pfp1.png"
                                                                    alt="user avatar"
                                                                    width={32}
                                                                    height={32}
                                                                    className="object-cover w-full h-full"
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-white">
                                                                        cursed user
                                                                    </span>
                                                                    <span className="text-white/40 text-xs">
                                                                        just now
                                                                    </span>
                                                                </div>
                                                                <p className="text-white/80 text-sm mt-1">
                                                                    h̷e̷l̷l̷o̷ w̷o̷r̷l̷d̷
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-white/40 text-sm text-center">
                                                        messages are replaced with zalgo text
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <div className="md:col-span-3 flex flex-col md:flex-row gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full md:w-[400px] group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                                 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-2xl">🖼️</span>
                                                <h3 className="text-xl font-semibold text-white">
                                                    Image Effects
                                                </h3>
                                            </div>

                                            <p className="text-white/60 text-sm mb-6">
                                                Over 16 image effects including deepfry, pixelate,
                                                flash, and more
                                            </p>

                                            <div>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                    <span className="text-white/60 text-sm">
                                                        Popular Effects
                                                    </span>
                                                </div>

                                                <div className="space-y-3 mb-4">
                                                    <div className="bg-black/40 rounded-lg p-3">
                                                        <div className="text-white/80 text-sm mb-2">
                                                            Deepfry • id: 001
                                                        </div>
                                                        <div className="aspect-[16/9] rounded-lg bg-white/5 overflow-hidden">
                                                            <Image
                                                                src="/deepfry.jpg"
                                                                alt="Deepfry"
                                                                width={320}
                                                                height={140}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        </div>
                                                        <div className="text-white/40 text-xs mt-2">
                                                            /image deepfry
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div className="bg-black/40 rounded-lg p-3">
                                                            <div className="text-white/80 text-sm mb-2">
                                                                Pixelate • id: 002
                                                            </div>
                                                            <div className="aspect-square rounded-lg bg-white/5 overflow-hidden">
                                                                <Image
                                                                    src="/pixelate.jpg"
                                                                    alt="Pixelate"
                                                                    width={180}
                                                                    height={180}
                                                                    className="object-cover w-full h-full"
                                                                />
                                                            </div>
                                                            <div className="text-white/40 text-xs mt-2">
                                                                /image pixelate
                                                            </div>
                                                        </div>
                                                        <div className="bg-black/40 rounded-lg p-3">
                                                            <div className="text-white/80 text-sm mb-2">
                                                                Flash • id: 003
                                                            </div>
                                                            <div className="aspect-square rounded-lg bg-white/5 overflow-hidden">
                                                                <Image
                                                                    src="/flash.jpg"
                                                                    alt="Flash"
                                                                    width={180}
                                                                    height={180}
                                                                    className="object-cover w-full h-full"
                                                                />
                                                            </div>
                                                            <div className="text-white/40 text-xs mt-2">
                                                                /image flash
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    {[
                                                        "16+ Effects",
                                                        "Custom Input",
                                                        "Fast Processing",
                                                        "Free"
                                                    ].map((feature, i) => (
                                                        <div
                                                            key={i}
                                                            className="text-sm bg-white/[0.02] rounded px-3 py-2 text-white/40">
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent 
                                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full flex-1 group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                                 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-2xl">💬</span>
                                                <h3 className="text-xl font-semibold text-white">
                                                    Web Chat Interface
                                                </h3>
                                            </div>

                                            <p className="text-white/60 text-sm mb-4">
                                                Talk to Chromed AI directly from your browser, no
                                                Discord needed.
                                            </p>

                                            <div className="bg-black/40 rounded-lg p-4 mb-4">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                                        <Image
                                                            src="https://r2.chrxmaticc.com/chromed.png"
                                                            alt="Chromed avatar"
                                                            width={32}
                                                            height={32}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-white text-sm">
                                                                Chromed AI
                                                            </span>
                                                            <span className="text-white/40 text-xs">
                                                                online
                                                            </span>
                                                        </div>
                                                        <div className="text-white/40 text-xs">
                                                            web app
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="aspect-video rounded-lg bg-white/5 overflow-hidden">
                                                    <Image
                                                        src="/chat-preview.png"
                                                        alt="Chat preview"
                                                        width={640}
                                                        height={360}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                {[
                                                    "Hybrid AI",
                                                    "Custom Personalities",
                                                    "Memory",
                                                    "API Access",
                                                    "Free",
                                                    "No Discord"
                                                ].map((feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="text-sm bg-white/[0.02] rounded px-3 py-2 text-white/40">
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent 
                                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative py-24 -mx-[calc((100vw-100%)/2)] bg-[#0e0d0d]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold mb-4 relative">
                                    <span
                                        className="bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text 
                                           drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                        Seamless Integrations
                                    </span>
                                    <div className="absolute -inset-x-4 -inset-y-2 bg-white/5 blur-2xl -z-10 rounded-lg" />
                                </h2>
                                <p className="text-white/60 text-lg">
                                    Connect your favorite services with Chromed
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 rounded-full overflow-hidden">
                                                <Image
                                                    src="https://r2.chrxmaticc.com/chromed.png"
                                                    alt="chromed avatar"
                                                    width={24}
                                                    height={24}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <span className="text-white text-sm">chromed</span>
                                            <span className="text-xs px-1 bg-blurple text-white rounded">
                                                APP
                                            </span>
                                            <span className="text-white/40 text-xs">used</span>
                                            <span className="text-[#1e9cea] text-sm">
                                                image generation
                                            </span>
                                        </div>

                                        <div className="bg-[#18191c] rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <div className="text-[#1e9cea] text-sm flex items-center gap-2 mb-1">
                                                        <Image
                                                            src="/imagine.png"
                                                            alt="Imagine"
                                                            width={16}
                                                            height={16}
                                                            className="object-cover"
                                                        />
                                                        Now Generating
                                                    </div>

                                                    <div className="text-[#1e9cea] text-sm mb-1">
                                                        Cyberpunk city in rain
                                                    </div>
                                                    <div className="text-white/60 text-xs mb-2">
                                                        by chromed AI
                                                    </div>
                                                </div>
                                                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src="/cyberpunk.jpg"
                                                        alt="Generated"
                                                        width={64}
                                                        height={64}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-2">
                                                <div className="text-xs text-white/60 mb-1">
                                                    Progress
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-white/60 text-xs">
                                                        0:01
                                                    </span>
                                                    <div className="flex-1 h-[3px] bg-white/10 rounded-full">
                                                        <div className="w-1/3 h-full bg-white rounded-full" />
                                                    </div>
                                                    <span className="text-white/60 text-xs">
                                                        0:05
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="text-xs text-white/60 mb-2">
                                                Status
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span>⏳ Processing</span>
                                                    <span>•</span>
                                                    <span>💻 Computer</span>
                                                </div>
                                            </div>

                                            <div className="bg-[#111214] rounded p-2 mb-2 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-white/60">🤖</span>
                                                    <span className="text-white text-sm">
                                                        Pollinations AI
                                                    </span>
                                                </div>
                                                <ChevronDown className="w-4 h-4 text-white/60" />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-[#1e9cea]/5 to-transparent 
                                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-2xl">
                                                <FaGlobe className="w-8 h-8 text-white/60" />
                                            </span>
                                            <h3 className="text-xl font-semibold text-white">
                                                Web Dashboard
                                            </h3>
                                        </div>

                                        <p className="text-white/60 text-sm mb-6">
                                            Manage your server, premium, and settings from a
                                            beautiful web interface
                                        </p>

                                        <div className="bg-black/40 rounded-lg p-4">
                                            <div className="mb-4">
                                                <h4 className="text-white font-medium mb-2">
                                                    Dashboard Features
                                                </h4>
                                                <p className="text-white/60 text-sm">
                                                    Choose your control panel
                                                </p>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 p-3 rounded bg-white/[0.02]">
                                                    <span className="text-green-400">✅</span>
                                                    <span className="text-white/80">
                                                        Server settings (coming soon)
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 rounded bg-white/[0.02]">
                                                    <span className="text-red-400">❌</span>
                                                    <span className="text-white/80">Cancel</span>
                                                </div>
                                            </div>
                                            <p className="text-white/40 text-xs mt-4">
                                                Web dashboard provides full control over Chromed
                                                without using Discord commands
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="lg:col-span-2 group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                             hover:border-white/10 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-2xl">
                                                <FaGlobe className="w-8 h-8 text-white/60" />
                                            </span>
                                            <h3 className="text-xl font-semibold text-white">
                                                API Access
                                            </h3>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-white font-medium mb-2">
                                                    Chat API
                                                </h4>
                                                <p className="text-white/60 text-sm mb-4">
                                                    Integrate Chromed's AI into your own apps with
                                                    simple REST API
                                                </p>
                                                <div className="bg-black/40 rounded-lg p-4">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                                            <Image
                                                                src="https://r2.chrxmaticc.com/chromed.png"
                                                                alt="API"
                                                                width={32}
                                                                height={32}
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className="text-white text-sm">
                                                                POST /api/chat
                                                            </div>
                                                            <div className="text-white/40 text-xs">
                                                                Returns AI response
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="bg-white/[0.02] rounded p-2 text-sm text-white/60">
                                                            Example request
                                                        </div>
                                                        <div className="bg-white/[0.02] rounded p-2 text-sm text-white/60">
                                                            Documentation
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium mb-2">
                                                    Webhooks
                                                </h4>
                                                <p className="text-white/60 text-sm mb-4">
                                                    Receive real-time updates for events like
                                                    level ups, warnings, and more
                                                </p>
                                                <div className="bg-black/40 rounded-lg p-4">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3 bg-white/[0.02] rounded-lg p-3">
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-sm">
                                                                1
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-white text-sm">
                                                                    Level Up
                                                                </div>
                                                                <div className="text-white/40 text-xs">
                                                                    Webhook
                                                                </div>
                                                            </div>
                                                            <div className="text-yellow-400">
                                                                🏆
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3 bg-white/[0.02] rounded-lg p-3">
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white text-sm">
                                                                2
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-white text-sm">
                                                                    Warning
                                                                </div>
                                                                <div className="text-white/40 text-xs">
                                                                    Webhook
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent 
                                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="py-24 border-t border-white/5">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold mb-4 relative">
                                    <span
                                        className="bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text 
                                           drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                        Core Features
                                    </span>
                                    <div className="absolute -inset-x-4 -inset-y-2 bg-white/5 blur-2xl -z-10 rounded-lg" />
                                </h2>
                                <p className="text-white/60 text-lg">
                                    Everything you need in one bot
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Moderation",
                                        description:
                                            "Advanced moderation and auto-moderation tools",
                                        commands: ["ban", "timeout", "purge", "warn"]
                                    },
                                    {
                                        icon: Settings,
                                        title: "Utility",
                                        description: "Essential server management features",
                                        commands: ["userinfo", "role", "embed", "poll"]
                                    },
                                    {
                                        icon: ImageIcon,
                                        title: "Image Effects",
                                        description: "16+ image effects with custom input",
                                        commands: ["deepfry", "pixelate", "flash", "invert"]
                                    },
                                    {
                                        icon: MessageSquare,
                                        title: "Social",
                                        description: "Engage your community with social features",
                                        commands: ["profile", "rep", "marry", "daily"]
                                    },
                                    {
                                        icon: Gamepad2,
                                        title: "Fun",
                                        description: "Interactive games and entertainment",
                                        commands: ["juul", "8ball", "bomb", "slots"]
                                    },
                                    {
                                        icon: HeartHandshake,
                                        title: "Roleplay",
                                        description: "Express yourself with roleplay actions",
                                        commands: ["hug", "pat", "kiss", "slap"]
                                    },
                                    {
                                        icon: FaGhost,
                                        title: "Curselock",
                                        description: "Curse users with zalgo text via webhook",
                                        commands: ["curse", "quiet", "lock", "unlock"]
                                    },
                                    {
                                        icon: Sparkles,
                                        title: "Economy",
                                        description: "Virtual currency and trading system",
                                        commands: ["balance", "work", "shop", "inv"]
                                    }
                                ].map((category, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                                 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300">
                                        <div className="relative z-10">
                                            <div className="mb-4">
                                                <category.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {category.title}
                                            </h3>
                                            <p className="text-white/60 text-sm mb-4">
                                                {category.description}
                                            </p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {category.commands.map((cmd, j) => (
                                                    <div
                                                        key={j}
                                                        className="text-sm bg-black/20 rounded px-3 py-2 text-white/40 group-hover:text-white/50 transition-colors">
                                                        ;{cmd}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <motion.a
                                    href="/commands"
                                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}>
                                    <span>Explore all commands</span>
                                    <span className="text-lg">→</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    <div className="py-24 border-t border-white/5">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="grid grid-cols-2 gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                                 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="mb-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <FaServer className="w-5 h-5 text-white/40" />
                                                    <div className="text-3xl font-bold text-white">
                                                        {stats.guilds.toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    Active Servers
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent 
                                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        className="group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                                 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="mb-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <FaUsers className="w-5 h-5 text-white/40" />
                                                    <div className="text-3xl font-bold text-white">
                                                        {stats.users.toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    Total Users
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent 
                                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                                 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="mb-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <IoTerminal className="w-5 h-5 text-white/40" />
                                                    <div className="text-3xl font-bold text-white">
                                                        {stats.commands.toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    Commands
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent 
                                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="group relative bg-white/[0.02] border border-white/5 rounded-xl p-6 
                                                 hover:border-white/10 transition-all duration-300 overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="mb-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <HiOutlineStatusOnline className="w-5 h-5 text-white/40" />
                                                    <div className="text-3xl font-bold text-white">
                                                        99.9%
                                                    </div>
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    Uptime
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent 
                                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="lg:pl-12">
                                    <h2 className="text-4xl font-bold text-white mb-6">
                                        Ready to enhance your Discord server?
                                    </h2>
                                    <p className="text-white/60 text-xl mb-10">
                                        Join thousands of servers already using Chromed
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <motion.a
                                            href="/invite"
                                            className="group px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 
                                                     transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}>
                                            <RiRobot2Line className="w-5 h-5" />
                                            Add to Discord
                                            <motion.span
                                                className="inline-block"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 3 }}>
                                                →
                                            </motion.span>
                                        </motion.a>
                                        <motion.a
                                            href="https://discord.gg/chrxmaticc"
                                            target="_blank"
                                            className="group px-8 py-3 bg-[#5865F2] text-white rounded-lg font-medium 
                                                     hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}>
                                            <RiDiscordLine className="w-5 h-5" />
                                            Join our Discord
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
