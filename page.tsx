
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Sparkles, Zap, Users, QrCode, Download, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function ClubHub() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-headline font-bold mb-2">Club Hub</h1>
          <p className="text-muted-foreground">Manage your NextGen ICT Club residency and benefits.</p>
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5 font-bold uppercase tracking-widest">
          Active Member
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Digital Membership Card */}
        <div className="space-y-4">
          <h2 className="text-sm font-headline font-bold text-muted-foreground uppercase tracking-widest">Digital ID Card</h2>
          <div className="relative group cursor-pointer perspective-1000">
            <div className="aspect-[1.586/1] w-full rounded-[2rem] p-8 relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0a0a12] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-y-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-[60px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
              
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-headline font-bold tracking-tight">VANGUARD</h3>
                    <p className="text-[8px] uppercase tracking-widest text-primary font-bold">Residency Unit</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Status</p>
                  <Badge className="bg-primary text-white text-[8px] border-none px-2 h-4">ELITE MEMBER</Badge>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <h4 className="text-xl font-headline font-bold mb-1">ALEX RIVERA</h4>
                  <p className="text-[10px] font-code text-muted-foreground">UID: NXG-2026-AR-812</p>
                  <p className="text-[10px] font-code text-muted-foreground mt-1">ISSUED: JAN 2026 | EXPIRES: DEC 2026</p>
                </div>
                <div className="p-2 bg-white rounded-lg shadow-inner">
                  <QrCode className="w-12 h-12 text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 gap-2 border-white/10 hover:bg-white/5">
              <Download className="w-4 h-4" /> Export PDF
            </Button>
            <Button variant="outline" className="flex-1 gap-2 border-white/10 hover:bg-white/5">
              <Share2 className="w-4 h-4" /> Share ID
            </Button>
          </div>
        </div>

        {/* Membership Details & Perks */}
        <div className="space-y-6">
          <Card className="glass-panel border-none">
            <CardHeader>
              <CardTitle className="font-headline">Member Statistics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">12</p>
                <p className="text-[10px] text-muted-foreground uppercase">Events</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">450</p>
                <p className="text-[10px] text-muted-foreground uppercase">NXG Points</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">#24</p>
                <p className="text-[10px] text-muted-foreground uppercase">Rank</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel border-none">
            <CardHeader>
              <CardTitle className="font-headline">Exclusive Perks</CardTitle>
              <CardDescription>Activated for your Elite status tier.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: Sparkles, title: "Industry Mentorship", desc: "1-on-1 monthly session with tech leads." },
                { icon: Zap, title: "Cloud Credits", desc: "Unlimited AWS/Azure playground access." },
                { icon: Users, title: "Premium Jobs Board", desc: "Direct access to top 5% internship pool." },
              ].map((perk, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <perk.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold">{perk.title}</h5>
                    <p className="text-xs text-muted-foreground">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
